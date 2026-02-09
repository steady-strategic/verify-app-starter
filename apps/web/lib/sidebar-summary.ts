/**
 * Utility function to generate sidebar summary for a blog post
 * Calls the API route to generate AI summaries
 */
export async function generateSidebarSummary(slug: string): Promise<{
    success: boolean;
    summary?: {
        sidebarTitle: string;
        sidebarExcerpt: string;
    };
    error?: string;
}> {
    try {
        const response = await fetch('/api/generate-sidebar-summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug }),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: data.error || 'Failed to generate summary',
            };
        }

        return {
            success: true,
            summary: data.summary,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || 'Network error',
        };
    }
}

/**
 * Auto-generate sidebar summary when a post is published
 * Call this function after updating a post's published status to true
 */
export async function autoGenerateSummaryOnPublish(
    slug: string,
    wasPublished: boolean,
    isNowPublished: boolean
): Promise<void> {
    // Only generate if post is being published for the first time
    if (!wasPublished && isNowPublished) {
        console.log(`🤖 Auto-generating sidebar summary for "${slug}"...`);
        const result = await generateSidebarSummary(slug);

        if (result.success) {
            console.log(`✅ Summary generated for "${slug}"`);
            console.log(`   Title: ${result.summary?.sidebarTitle}`);
            console.log(`   Excerpt: ${result.summary?.sidebarExcerpt}`);
        } else {
            console.error(`❌ Failed to generate summary for "${slug}":`, result.error);
        }
    }
}
