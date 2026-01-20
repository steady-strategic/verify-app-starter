import React from "react";
import { BlogFeed } from "@/components/sections/BlogFeed";

export default function TestBlogFeedPage() {
    const blogFeedData = {
        posts: [
            {
                id: "1",
                title: "Treating Trauma, Pain, and Addiction Together",
                description: "How Mindfulness-Oriented Recovery Enhancement (MORE) Builds Emotional Regulation and Reduces Substance Misuse",
                cta: {
                    label: "Read more",
                    href: "/resources/blog/1",
                    iconSrc: "/assets/images/arrow-1.svg",
                },
            },
            {
                id: "2",
                title: "Rewiring the Brain to Heal from Addiction",
                description: "As a scientist and clinician, I've seen how addiction doesn't just hijack behavior, it fundamentally rewires the brain.",
                cta: {
                    label: "Read more",
                    href: "/resources/blog/2",
                    iconSrc: "/assets/images/arrow-2.svg",
                },
            },
            {
                id: "3",
                title: "Quieting the Addicted Brain",
                description: "For therapists working at the intersection of addiction, emotional distress, and chronic pain, the need for effective interventions has never been more urgent.",
                cta: {
                    label: "Read more",
                    href: "/resources/blog/3",
                    iconSrc: "/assets/images/arrow-3.svg",
                },
            },
            {
                id: "4",
                title: "The Science of Savoring",
                description: "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
                cta: {
                    label: "Read more",
                    href: "/resources/blog/4",
                    iconSrc: "/assets/images/arrow-4.svg",
                },
            },
            {
                id: "5",
                title: "Mindfulness in the Moment",
                description: "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
                cta: {
                    label: "Read more",
                    href: "/resources/blog/5",
                    iconSrc: "/assets/images/arrow-5.svg",
                },
            },
        ],
    };

    return (
        <div className="bg-white min-h-screen py-10">
            <BlogFeed {...blogFeedData} />
        </div>
    );
}
