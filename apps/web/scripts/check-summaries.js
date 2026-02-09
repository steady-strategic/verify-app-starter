const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkSummaries() {
    const posts = await prisma.story.findMany({
        where: { published: true },
        select: {
            slug: true,
            title: true,
            sidebarTitle: true,
            sidebarExcerpt: true,
        },
    });

    console.log('Published posts with sidebar summaries:\n');
    posts.forEach(post => {
        console.log(`Slug: ${post.slug}`);
        console.log(`  Title: ${post.title}`);
        console.log(`  Sidebar Title: ${post.sidebarTitle || '❌ MISSING'}`);
        console.log(`  Sidebar Excerpt: ${post.sidebarExcerpt || '❌ MISSING'}`);
        console.log('');
    });

    await prisma.$disconnect();
}

checkSummaries();
