import type { PageBannerSectionProps, VideoSectionProps } from "@/components/sections/types";
import React from "react";

export const patientsContent = {
    pageBanner: {
        variant: "patients",
        title: (
            <span className="text-gray-900">
                Healing <span className="text-primary-1">MORE</span>
            </span>
        ),
        subtitle: (
            <span className="text-gray-900 font-bold">
                A Proven Path to Recovery
            </span>
        ),
        description: (
            <span className="text-gray-900">
                MORE (Mindfulness-Oriented Recovery Enhancement) is an evidence-based therapy designed to help you overcome addiction, manage chronic pain, and reduce stress.
                <br /><br />
                By combining mindfulness training, cognitive-behavioral strategies, and positive psychology, MORE empowers you to rewire your brain, regain control over your life, and find lasting joy.
            </span>
        ),
        backgroundImage: {
            src: "/assets/images/PageBanner/page-banner.png",
            alt: "Background"
        },
        foregroundImage: {
            src: "/assets/images/PageBanner/patients-right-image.png",
            alt: "Patients Healing"
        }
    } satisfies PageBannerSectionProps,
    video: {
        variant: "patients",
        title: "See MORE in action",
        subtitle: (
            <span>
                Learn how MORE targets the brain's reward processes to restore responsiveness to natural pleasure and reduce opioid cravings.
            </span>
        ),
        backgroundImage: {
            src: "/assets/images/Video/patients-bg.png",
            alt: "Video Background"
        },
        videoPreviewImage: {
            src: "/assets/images/Video/Vid-preview-comp.png",
            alt: "MORE in action"
        }
    } satisfies VideoSectionProps
};
