const { PrismaClient } = require('@prisma/client');
const summaries = require('../data/sidebar-summaries.json');

const prisma = new PrismaClient();

async function migrateSummaries() {
    console.log('🚀 Starting migration of sidebar summaries to database...\n');

    for (const [slug, summary] of Object.entries(summaries)) {
        try {
            const updated = await prisma.story.update({
                where: { slug },
                data: {
                    sidebarTitle: summary.sidebarTitle,
                    sidebarExcerpt: summary.sidebarExcerpt,
                },
            });

            console.log(`✅ Updated "${slug}"`);
            console.log(`   Title: ${summary.sidebarTitle}`);
            console.log(`   Excerpt: ${summary.sidebarExcerpt}\n`);
        } catch (error) {
            console.error(`❌ Failed to update "${slug}":`, error.message);
        }
    }

    await prisma.$disconnect();
    console.log('✨ Migration complete!');
}

migrateSummaries();
