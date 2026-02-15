import type {
    PageBannerSectionProps,
    CardsSectionProps,
    ContentSectionProps,
    KnowMoreSectionProps
} from "@/components/sections/types";
import React from "react";

export const howItWorksContent = {
    pageBanner: {
        variant: "how-it-works",
        title: "How it Works",
        subtitle: "Mindfulness-Oriented Recovery Enhancement",
        description: (
            <>
                <p className="mb-6">An evidence‑based, neuroscience‑informed therapy—backed by more than 16 clinical trials and over $90 million in federal research—that unites innovative mindfulness, reappraisal, and savoring techniques into a powerful, sequenced mind‑body approach.</p>
                <p>Hailed as one of the biggest breakthroughs in psychotherapy in the past 30 years, MORE has the strongest evidence base of any therapy for co-occurring addiction, chronic pain, and emotional distress.</p>
            </>
        ),
        backgroundImage: {
            src: "/assets/images/PageBanner/page-banner.avif",
            alt: "Background"
        },
        foregroundImage: {
            src: "/assets/images/PageBanner/PageBannerBrain.avif",
            alt: "Brain illustration"
        }
    } satisfies PageBannerSectionProps,

    cards: {
        title: (
            <span>
                <span className="text-primary-1">MORE</span> <span className="text-gray-700">is a structured, rigorously-tested therapeutic protocol. Patients engage in mind-body training, delivered individually or in a group setting, to learn unique mindfulness, reappraisal, and savoring skills to strengthen recovery and generate well-being.</span>
            </span >
        ),
        items: [
            {
                icon: { src: "/assets/images/Cards/mindfulness.svg", alt: "Mindfulness" },
                title: (
                    <>
                        <span className="text-primary-1">MORE</span>
                        <span className="text-gray-900"> Mindfulness</span>
                    </>
                ),
                description: "A form of mental training focused on strengthening self-awareness and self-regulation to help people observe their thoughts, emotions, and sensations without being swept away by them. Through practice, patients learn to transform addictive habits, craving, and chronic pain by exercising neural networks involved in attention, emotion regulation, and pain processing."
            },
            {
                icon: { src: "/assets/images/Cards/reappraisal.svg", alt: "Reappraisal" },
                title: (
                    <>

                        <span className="text-primary-1">MORE</span>
                        <span className="text-gray-900"> Reappraisal</span>
                    </>
                ),
                description: "A cognitive strategy integrating mindfulness to reframe distressing thoughts, negative core beliefs, or unhelpful interpretations of challenging life situations. Instead of suppressing or ignoring difficult emotions, patients learn to efficiently engage prefrontal brain resources to shift their perspective in ways that reduce suffering and create healthier patterns of behavior."
            },
            {
                icon: { src: "/assets/images/Cards/savoring.svg", alt: "Savoring" },
                title: (
                    <>
                        <span className="text-primary-1">MORE</span>
                        <span className="text-gray-900"> Savoring</span>
                    </>
                ),
                description: "A deliberate mindfulness practice of amplifying positive emotions, reconnecting with natural rewards, and restoring the capacity to feel healthy pleasure, meaning, and joy. Because addiction, pain, depression, and trauma can disrupt the brain’s reward system, savoring helps heal this dysfunction by directing attention toward positive experiences and retraining the mind to appreciate life."
            }
        ]
    } satisfies CardsSectionProps,

    content: {
        title: (
            <>
                <span className="text-primary-1">MORE</span> isn’t just about reducing symptoms. It’s about helping people flourish. Most mindfulness programs stop at acceptance. MORE goes further, guiding patients to:
            </>
        ),
        items: [
            "Break free from unhealthy habits with mindfulness",
            "Reframe distressing thoughts and negative core beliefs",
            "Amplify positive emotions and reconnect with natural rewards",
            "Experience powerful and lasting change with just eight weekly sessions",
            "Relieve physical and emotional pain"
        ],
        image: {
            src: "/assets/images/Content/howItWorks-Left-Image.avif",
            alt: "Person enjoying nature"
        },
        cta: {
            text: "Learn MORE",
            href: "/patients"
        }
    } satisfies ContentSectionProps,

    knowMore: {
        title: (
            <>
                <span className="text-white">Know </span>
                <span className="text-primary-1">MORE</span>
            </>
        ),
        subtitle: "Sign up to receive Dr.Garland's insights",
        backgroundImage: {
            src: "/assets/images/KnowMore/background.png",
            alt: "Footer background"
        },
        cta: {
            text: "Know MORE",
            href: "/sign-up"
        }
    } satisfies KnowMoreSectionProps
};
