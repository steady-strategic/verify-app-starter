import React from "react";
import { BlogHero } from "@/components/sections/BlogHero";

export default function TestBlogHeroPage() {
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
                headerGradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)", // Estimated gradient for variety
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
        <div className="bg-white min-h-screen">
            <BlogHero {...blogHeroData} />
        </div>
    );
}
