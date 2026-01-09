import { NextRequest, NextResponse } from "next/server";

/**
 * Debug endpoint to test Monday API connection
 */
export async function GET(request: NextRequest) {
    const itemId = request.nextUrl.searchParams.get("itemId") || "10959089688";

    try {
        const apiToken = process.env.MONDAY_API_TOKEN;

        if (!apiToken) {
            return NextResponse.json({ error: "MONDAY_API_TOKEN not set" }, { status: 500 });
        }

        const query = `
      query GetContactItem($itemId: ID!) {
        items(ids: [$itemId]) {
          id
          name
          column_values {
            id
            text
            value
          }
        }
      }
    `;

        const response = await fetch("https://api.monday.com/v2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: apiToken,
            },
            body: JSON.stringify({ query, variables: { itemId } }),
        });

        const result = await response.json();

        if (result.errors) {
            return NextResponse.json({ error: "Monday API error", details: result.errors }, { status: 500 });
        }

        const item = result.data?.items?.[0];
        if (!item) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        // Find email column
        const emailColumn = item.column_values.find((col: any) => col.id === "email_mkzenam9");

        return NextResponse.json({
            success: true,
            itemId: item.id,
            itemName: item.name,
            emailColumn: emailColumn,
            allColumns: item.column_values,
        });
    } catch (error) {
        return NextResponse.json({
            error: "Exception",
            details: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
}
