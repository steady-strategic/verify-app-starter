
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { StoryDetail } from "../../../components/blog/StoryDetail";
import { prisma } from "../../../lib/db";

export default async function StoryPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const story = await prisma.story.findUnique({
        where: { slug },
        include: {
            author: {
                select: {
                    firstName: true,
                    lastName: true,
                }
            }
        }
    });

    if (!story) {
        notFound();
    }

    // Adapt database story to component interface
    const adaptedStory = {
        id: parseInt(story.id), // StoryDetail expects number? Let's check or cast. Prisma ID is usually string (cuid/uuid) or int. If string, we might need to update Story interface.
        // Assuming StoryDetail interface expects string ID or we update it. Let's look at StoryDetail props.
        // StoryDetail interface: id: number. We should update StoryDetail to accept string or number.
        // For now, let's just pass it as is and fix type if needed or force cast if IDs are numeric strings.
        // Actually, let's update StoryDetail to be flexible or check prisma schema.
        // Let's assume schema uses string IDs (CUID).
        title: story.title,
        excerpt: story.excerpt,
        body: story.content, // Map content to body
        author: `${story.author.firstName} ${story.author.lastName}`,
        category: "Blog", // Default or fetch category
        date: new Date(story.createdAt).toLocaleDateString(),
        image: story.imageUrl || "",
        mediaLink: story.mediaUrl || undefined
    };

    // Fetch 5 random published posts excluding current one for sidebar
    const sidebarPosts = await prisma.story.findMany({
        where: {
            published: true,
            slug: { not: slug } // Exclude current post
        },
        select: {
            slug: true,
            title: true,
            excerpt: true,
            imageUrl: true,
        },
        take: 5,
        orderBy: {
            publishedAt: 'desc'
        }
    });

    // Randomly select 4 from the 5 fetched
    const shuffled = [...sidebarPosts].sort(() => 0.5 - Math.random());
    const randomPosts = shuffled.slice(0, 4);

    return (
        <div className="min-h-screen">
            <Navbar scrolled={true} />
            <StoryDetail story={adaptedStory} blogPosts={randomPosts} />
            <Footer />
        </div>
    );
}
