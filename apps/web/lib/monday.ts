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

    // Column IDs from your board (configurable via env vars)
    const emailColumnId = process.env.MONDAY_EMAIL_COLUMN_ID || "email_mkzenam9";
    const firstNameColumnId = process.env.MONDAY_FIRST_NAME_COLUMN_ID || "text_mkzeqemp";
    const lastNameColumnId = process.env.MONDAY_LAST_NAME_COLUMN_ID || "text_mkze1r7g";

    // Extract email from column values
    const emailColumn = item.column_values.find((col) => col.id === emailColumnId);
    const firstNameColumn = item.column_values.find(
        (col) => col.id === firstNameColumnId
    );
    const lastNameColumn = item.column_values.find(
        (col) => col.id === lastNameColumnId
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
 * Updates are done sequentially: Set Password Link first, then Invite Status
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
    mutation UpdateColumn($boardId: ID!, $itemId: ID!, $columnId: String!, $value: JSON!) {
      change_column_value(
        board_id: $boardId
        item_id: $itemId
        column_id: $columnId
        value: $value
      ) {
        id
      }
    }
  `;

    // Step 1: Update Set Password Link first
    await mondayGraphQL(mutation, {
        boardId,
        itemId,
        columnId: setPasswordColumnId,
        value: JSON.stringify(setPasswordUrl),
    });

    // Step 2: Update Invite Status second
    await mondayGraphQL(mutation, {
        boardId,
        itemId,
        columnId: inviteStatusColumnId,
        value: JSON.stringify({ label: inviteStatus }),
    });
}
