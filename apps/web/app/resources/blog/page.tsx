import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { StoriesPage } from "../../../components/blog/StoriesPage";

// Sample stories data (will be replaced with database query in Phase 7)
const SAMPLE_STORIES = [
    {
        id: 1,
        title: "From Pain to Presence: Sarah's Journey",
        excerpt: "After ten years of chronic back pain and prescription dependencies, Sarah discovered a new way to interact with sensation.",
        category: "Success Story",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        title: "The Neurobiology of Savoring",
        excerpt: "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
        category: "Science",
        date: "March 02, 2024",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Mindfulness in the Moment",
        excerpt: "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
        category: "Technique",
        date: "Feb 18, 2024",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
];

export default function StoriesListPage() {
    return (
        <div className="min-h-screen">
            <Navbar scrolled={true} />
            <StoriesPage stories={SAMPLE_STORIES} />
            <Footer />
        </div>
    );
}
