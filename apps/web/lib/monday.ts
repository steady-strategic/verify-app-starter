/**
 * Monday.com API client helpers
 */

const MONDAY_API_URL = "https://api.monday.com/v2";

interface MondayGraphQLResponse<T> {
    data?: T;
    errors?: Array<{ message: string }>;
}

/**
 * Execute a GraphQL query/mutation against monday.com API
 */
async function mondayGraphQL<T>(
    query: string,
    variables: Record<string, any> = {}
): Promise<T> {
    const apiToken = process.env.MONDAY_API_TOKEN;
    if (!apiToken) {
        throw new Error("MONDAY_API_TOKEN environment variable is not set");
    }

    const response = await fetch(MONDAY_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: apiToken,
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
        throw new Error(`Monday API request failed: ${response.statusText}`);
    }

    const result: MondayGraphQLResponse<T> = await response.json();

    if (result.errors) {
        throw new Error(
            `Monday GraphQL errors: ${result.errors.map((e) => e.message).join(", ")}`
        );
    }

    if (!result.data) {
        throw new Error("Monday API returned no data");
    }

    return result.data;
}

/**
 * Fetch contact item details from monday.com
 */
export async function fetchMondayContactItem(itemId: string): Promise<{
    email: string;
    firstName: string;
    lastName: string;
}> {
    const query = `
    query GetContactItem($itemId: ID!) {
      items(ids: [$itemId]) {
        id
        name
        column_values {
          id
          text
        }
      }
    }
  `;

    const result = await mondayGraphQL<{
        items: Array<{
            id: string;
            name: string;
            column_values: Array<{ id: string; text: string | null }>;
        }>;
    }>(query, { itemId });

    const item = result.items[0];
    if (!item) {
        throw new Error(`Monday item ${itemId} not found`);
    }

    // Extract email from column values
    const emailColumn = item.column_values.find((col) => col.id === "email");
    const firstNameColumn = item.column_values.find(
        (col) => col.id === "first_name"
    );
    const lastNameColumn = item.column_values.find(
        (col) => col.id === "last_name"
    );

    const email = emailColumn?.text;
    const firstName = firstNameColumn?.text || "";
    const lastName = lastNameColumn?.text || "";

    if (!email) {
        throw new Error(`No email found for monday item ${itemId}`);
    }

    return { email, firstName, lastName };
}

/**
 * Update monday item columns with invite link and status
 */
export async function updateMondayInviteColumns(
    itemId: string,
    setPasswordUrl: string,
    inviteStatus: "Sent" | "Completed" = "Sent"
): Promise<void> {
    const boardId = process.env.MONDAY_BOARD_ID;
    const setPasswordColumnId = process.env.MONDAY_SET_PASSWORD_COLUMN_ID;
    const inviteStatusColumnId = process.env.MONDAY_INVITE_STATUS_COLUMN_ID;

    if (!boardId || !setPasswordColumnId || !inviteStatusColumnId) {
        throw new Error(
            "Missing monday.com environment variables: MONDAY_BOARD_ID, MONDAY_SET_PASSWORD_COLUMN_ID, or MONDAY_INVITE_STATUS_COLUMN_ID"
        );
    }

    const mutation = `
    mutation UpdateInviteLink($boardId: ID!, $itemId: ID!, $columnValues: JSON!) {
      change_multiple_column_values(
        board_id: $boardId
        item_id: $itemId
        column_values: $columnValues
      ) {
        id
      }
    }
  `;

    const columnValues = JSON.stringify({
        [setPasswordColumnId]: setPasswordUrl,
        [inviteStatusColumnId]: { label: inviteStatus },
    });

    await mondayGraphQL(mutation, {
        boardId,
        itemId,
        columnValues,
    });
}
