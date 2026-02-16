import { BlogHomeSectionProps, KnowMoreSectionProps } from "@/components/sections/types";

export const homeContent = {
    blogHome: {
        title: "Insights from Dr. Garland",
        items: [
            {
                image: {
                    src: "/assets/images/VideoClinicians/Thumbnail.png", // Placeholder
                    alt: "Advancing Treatment for Addiction and Pain"
                },
                category: "Research Paper",
                title: "Advancing Treatment for Addiction and Pain Through the Science of MORE",
                description: "Modern life is beset by struggle. To alleviate the resultant physical and emotional pain, we often turn to unhealthy coping habits: We eat too much, we use drugs and alcohol, and we numb ourselves with binge watching, doomscrolling, and social media.",
                href: "/insights"
            },
            {
                image: {
                    src: "/assets/images/VideoClinicians/Thumbnail.png", // Placeholder
                    alt: "Rewiring the Brain"
                },
                category: "Blog Post",
                title: "Rewiring the Brain to Heal from Addiction: How MORE Restores Joy and Reduces Craving",
                description: "This insidious process happens in all addictions, but it’s especially devastating in opioid use disorder (OUD). Over time, people struggling with OUD lose the ability to feel natural pleasure from everyday experiences.",
                href: "/insights"
            },
            {
                image: {
                    src: "/assets/images/VideoClinicians/Thumbnail.png", // Placeholder
                    alt: "Rewire Your Brain for Joy"
                },
                category: "Blog Post",
                title: "How to Rewire Your Brain for Joy: Practical Ways to Use MORE in Everyday Life",
                description: "Most of us think of addiction as something that only applies to substances. But if we’re honest, almost everyone is addicted to something: sugar, alcohol, shopping, porn, internet rabbit holes, phone checking, binge-watching, doom-scrolling, work, approval, distraction..",
                href: "/insights"
            }
        ]
    } satisfies BlogHomeSectionProps,
    knowMore: {
        title: (
            <span>
                <span className="text-white">Know </span>
                <span className="text-primary-1">MORE</span>
            </span>
        ),
        subtitle: "Sign up to receive Dr. Garland's insights",
        backgroundImage: {
            src: "/assets/images/KnowMore/background.png",
            alt: "Footer background"
        },
        cta: {
            text: "Sign Up",
            href: "/patients#patients-form"
        }
    } satisfies KnowMoreSectionProps
};
