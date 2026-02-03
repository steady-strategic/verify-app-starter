import type {
    PageBannerSectionProps,
    ContentSectionProps
} from "@/components/sections/types";
import React from "react";

export const cliniciansContent = {
    pageBanner: {
        variant: "clinicians",
        title: (
            <span className="text-gray-900">
                Why <span className="text-primary-1">MORE?</span>
            </span>
        ),
        subtitle: (
            <span className="text-gray-900 font-bold">
                Provide Real, Lasting Recovery
            </span>
        ),
        description: (
            <span className="text-gray-900">
                For clinicians seeking a therapy that simultaneously addresses a wide array of afflictions including addiction, chronic pain, and emotional distress —MORE addresses these challenges at their core.
                <br /><br />
                Hailed as one of the greatest breakthroughs in psychotherapy in the past 30 years, MORE unifies the most powerful elements of mindfulness, cognitive‑behavioral therapy, and positive psychology into a single, neuroscience‑driven method that restores the brain’s capacity for regulation, well‑being, meaning, and joy.
                <br /><br />
                Discover how MORE can deepen your therapeutic impact, broaden your clinical toolkit, and help your patients achieve levels of healing and transformation that once felt out of reach.
            </span>
        ),
        backgroundImage: {
            src: "/assets/images/PageBanner/page-banner.png", // Inherited texture or generic bg
            alt: "Background"
        },
        foregroundImage: {
            src: "/assets/images/PageBanner/content-right-image-src.png",
            alt: "Clinicians Illustration"
        }
    } satisfies PageBannerSectionProps,

    content: {
        variant: "simple",
        title: (
            <span>
                <span>MORE</span> <span className="text-gray-900">gives clinicians a powerful, science-backed tool that builds resilience and restores well-being for their clients.</span>
            </span>
        ),
        items: [
            "Delivered over eight weekly sessions",
            "Group therapy or individual",
            "Easy homework delivery",
            "Enriching for both patient and clinician",
            "An insurance-reimbursable service covered by CPT codes",
            "CE-eligible, earn up to 13 continuing education units"
        ],
        image: {
            src: "/assets/images/Content/left-image.png",
            alt: "Therapy Session"
        },
        cta: {
            text: "Learn MORE",
            href: "/program"
        }
    } satisfies ContentSectionProps
};
