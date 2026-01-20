import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { BlogHero } from "../../../components/sections/BlogHero";
import { BlogFeed } from "../../../components/sections/BlogFeed";

// Sample stories data (will be replaced with database query in Phase 7)
const SAMPLE_STORIES = [
    {
        id: "1",
        title: "From Pain to Presence: Sarah's Journey",
        description: "After ten years of chronic back pain and prescription dependencies, Sarah discovered a new way to interact with sensation.",
        cta: {
            label: "Read more",
            href: "/resources/blog/1",
            iconSrc: "/assets/images/arrow-1.svg",
        },
    },
    {
        id: "2",
        title: "The Neurobiology of Savoring",
        description: "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
        cta: {
            label: "Read more",
            href: "/resources/blog/2",
            iconSrc: "/assets/images/arrow-2.svg",
        },
    },
    {
        id: "3",
        title: "Mindfulness in the Moment",
        description: "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
        cta: {
            label: "Read more",
            href: "/resources/blog/3",
            iconSrc: "/assets/images/arrow-3.svg",
        },
    },
];

export default function BlogPage() {
    const blogHeroData = {
        header: {
            title: "Our Blog",
            description: "Read the research and learn more about MORE",
        },
        charts: [
            {
                src: "/assets/images/chart-research-paper.svg",
                alt: "Research Chart 1",
            },
            {
                src: "/assets/images/chart-blog-post-1.svg",
                alt: "Blog Chart 1",
            },
            {
                src: "/assets/images/chart-blog-post-2.svg",
                alt: "Blog Chart 2",
            },
        ],
        cards: [
            {
                tag: "Research Paper",
                tagColor: "#6b21a8",
                headerGradient: "linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%)",
                title: "Quieting the Addicted Brain: Theta Waves, the Default Mode Network, and thePower of MORE",
                description: "For therapists working at the intersection of addiction, emotional distress, and chronic pain, the need for effective, evidencebased interventions has never been more urgent.",
                author: {
                    name: "Dr. Eric Garland",
                    avatar: "/assets/images/dr-eric-garland-avatar.jpg",
                },
                publishDate: "Aug 10, 2025",
                readTime: "6 min read",
            },
            {
                tag: "Blog Post",
                tagColor: "#7c3aed",
                headerGradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
                title: "Treating Trauma, Pain, and Addiction Together",
                description: "How Mindfulness-Oriented Recovery Enhancement (MORE) Builds Emotional Regulation and Reduces Substance Misuse",
                author: {
                    name: "Dr. Eric Garland",
                    avatar: "/assets/images/dr-eric-garland-avatar.jpg",
                },
                publishDate: "Aug 10, 2025",
                readTime: "6 min read",
            },
            {
                tag: "Blog Post",
                tagColor: "#7c3aed",
                headerGradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
                title: "Rewiring the Brain to Heal from Addiction",
                description: "As a scientist and clinician, I've seen how addiction doesn't just hijack behavior, it fundamentally rewires the brain.",
                author: {
                    name: "Dr. Eric Garland",
                    avatar: "/assets/images/dr-eric-garland-avatar.jpg",
                },
                publishDate: "Aug 1, 2026",
                readTime: "23 min read",
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar scrolled={true} />
            <div className="pt-24 pb-24 space-y-24">
                <BlogHero {...blogHeroData} />
                <BlogFeed posts={SAMPLE_STORIES} />
            </div>
            <Footer />
        </div>
    );
}
