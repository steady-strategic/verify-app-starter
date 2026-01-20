import { notFound } from "next/navigation";
import { Navbar } from "../../../../components/layout/Navbar";
import { Footer } from "../../../../components/layout/Footer";
import { StoryDetail } from "../../../../components/blog/StoryDetail";

// Sample stories data (will be replaced with database query in Phase 7)
const SAMPLE_STORIES = [
    {
        id: 1,
        title: "From Pain to Presence: Sarah's Journey",
        excerpt: "After ten years of chronic back pain and prescription dependencies, Sarah discovered a new way to interact with sensation.",
        body: "In the journey of recovery, traditional methods often focus solely on the suppression of negative symptoms. The MORE (Mindfulness-Oriented Recovery Enhancement) program takes a different approach.\n\nBy leveraging the concept of 'savoring,' individuals learn to restructure their brain's perception of pleasure and reward. This isn't just about feeling good in the moment.\n\nThis transformation doesn't happen overnight. It requires consistent practice and a willingness to re-engage with the world through a lens of curiosity and appreciation.",
        author: "Dr. Eric Garland",
        category: "Success Story",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        title: "The Neurobiology of Savoring",
        excerpt: "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
        body: "By leveraging the concept of 'savoring,' individuals learn to restructure their brain's perception of pleasure and reward. This isn't just about feeling good in the moment.\n\nResearch shows that mindfulness practices can actually rewire neural pathways associated with reward processing. When we savor positive experiences, we strengthen the brain's natural reward system.\n\nThis has profound implications for addiction recovery and pain management, as it provides an alternative source of pleasure that doesn't rely on substances or avoidance behaviors.",
        author: "Dr. Eric Garland",
        category: "Science",
        date: "March 02, 2024",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Mindfulness in the Moment",
        excerpt: "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
        body: "This transformation doesn't happen overnight. It requires consistent practice and a willingness to re-engage with the world through a lens of curiosity and appreciation.\n\nThe first exercise is the 'Three Breath Reset' - simply pause and take three deep, intentional breaths, noticing the sensation of air moving in and out of your body.\n\nThe second is 'Sensory Grounding' - identify five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste. This brings you fully into the present moment.",
        author: "Dr. Eric Garland",
        category: "Technique",
        date: "Feb 18, 2024",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
];

export default function StoryPage({ params }: { params: { id: string } }) {
    const storyId = parseInt(params.id);
    const story = SAMPLE_STORIES.find((s) => s.id === storyId);

    if (!story) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Navbar scrolled={true} />
            <StoryDetail story={story} />
            <Footer />
        </div>
    );
}
