import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SAMPLE_STORIES = [
    {
        title: "From Pain to Presence: Sarah's Journey",
        slug: "from-pain-to-presence-sarahs-journey",
        excerpt:
            "After ten years of chronic back pain and prescription dependencies, Sarah discovered a new way to interact with sensation.",
        content: `In the journey of recovery, traditional methods often focus solely on the suppression of negative symptoms. The MORE (Mindfulness-Oriented Recovery Enhancement) program takes a different approach.

By leveraging the concept of 'savoring,' individuals learn to restructure their brain's perception of pleasure and reward. This isn't just about feeling good in the moment.

This transformation doesn't happen overnight. It requires consistent practice and a willingness to re-engage with the world through a lens of curiosity and appreciation.`,
        imageUrl:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
        published: true,
    },
    {
        title: "The Neurobiology of Savoring",
        slug: "the-neurobiology-of-savoring",
        excerpt:
            "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
        content: `By leveraging the concept of 'savoring,' individuals learn to restructure their brain's perception of pleasure and reward. This isn't just about feeling good in the moment.

Research shows that mindfulness practices can actually rewire neural pathways associated with reward processing. When we savor positive experiences, we strengthen the brain's natural reward system.

This has profound implications for addiction recovery and pain management, as it provides an alternative source of pleasure that doesn't rely on substances or avoidance behaviors.`,
        imageUrl:
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
        published: true,
    },
    {
        title: "Mindfulness in the Moment",
        slug: "mindfulness-in-the-moment",
        excerpt:
            "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
        content: `This transformation doesn't happen overnight. It requires consistent practice and a willingness to re-engage with the world through a lens of curiosity and appreciation.

The first exercise is the 'Three Breath Reset' - simply pause and take three deep, intentional breaths, noticing the sensation of air moving in and out of your body.

The second is 'Sensory Grounding' - identify five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste. This brings you fully into the present moment.`,
        imageUrl:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
        published: true,
    },
];

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!adminEmail) {
        console.error("❌ ADMIN_EMAIL must be set in .env to assign stories to an author");
        process.exit(1);
    }

    // Find the admin user to assign as author
    const admin = await prisma.adminUser.findUnique({
        where: { email: adminEmail },
    });

    if (!admin) {
        console.error(`❌ No admin user found with email: ${adminEmail}`);
        console.error("   Please run the seed script first to create an admin user");
        process.exit(1);
    }

    console.log(`\n📚 Importing ${SAMPLE_STORIES.length} sample stories...`);
    let imported = 0;
    let skipped = 0;

    for (const storyData of SAMPLE_STORIES) {
        // Check if story already exists
        const existing = await prisma.story.findUnique({
            where: { slug: storyData.slug },
        });

        if (existing) {
            console.log(`  ⏭️  Skipped: "${storyData.title}" (already exists)`);
            skipped++;
            continue;
        }

        // Create the story
        await prisma.story.create({
            data: {
                ...storyData,
                publishedAt: storyData.published ? new Date() : null,
                authorId: admin.id,
            },
        });

        console.log(`  ✅ Imported: "${storyData.title}"`);
        imported++;
    }

    console.log(`\n✅ Story import complete!`);
    console.log(`   ${imported} stories imported`);
    console.log(`   ${skipped} stories skipped (already exist)`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
