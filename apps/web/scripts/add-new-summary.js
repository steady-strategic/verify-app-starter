const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addMissingSummary() {
    // Manually add summary for the new post
    const updated = await prisma.story.update({
        where: { slug: 'quieting-the-addicted-brain' },
        data: {
            sidebarTitle: 'Quieting the Addicted Brain',
            sidebarExcerpt: 'How MORE changes brain activity to reduce opioid misuse and cravings.',
        },
    });

    console.log('✅ Added sidebar summary for "quieting-the-addicted-brain"');
    console.log(`   Title: ${updated.sidebarTitle}`);
    console.log(`   Excerpt: ${updated.sidebarExcerpt}`);

    await prisma.$disconnect();
}

addMissingSummary();
