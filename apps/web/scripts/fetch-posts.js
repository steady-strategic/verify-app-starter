const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fetchPosts() {
    const posts = await prisma.story.findMany({
        where: { published: true },
        select: {
            slug: true,
            title: true,
            excerpt: true,
        },
    });

    console.log(JSON.stringify(posts, null, 2));
    await prisma.$disconnect();
}

fetchPosts();
