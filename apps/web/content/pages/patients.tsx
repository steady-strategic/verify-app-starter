import type { PageBannerSectionProps, VideoSectionProps, PatientsTextSectionProps, KnowMoreTallSectionProps } from "@/components/sections/types";
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
    } satisfies VideoSectionProps,
    patientsText: {
        title: (
            <span>
                <span className="text-primary-1">MORE</span> is delivered over eight weekly sessions and has a lasting impact. During each session, you’ll be carefully guided through a series of mindfulness, reappraisal, and savoring techniques.
            </span>
        ),
        subtitle: (
            <span>
                Learn more about how it works <a href="/how-it-works" className="text-primary-1 hover:underline">here</a>.
            </span>
        )
    } satisfies PatientsTextSectionProps,
    knowMore: {
        variant: "patients",
        title: (
            <span className="max-w-[800px] block">
                Interested in finding a <span className="text-primary-1">MORE</span> certified provider near you?
            </span>
        ),
        cta: {
            text: "Find Providers",
            href: "/directory"
        },
        backgroundImage: {
            src: "/assets/images/KnowMore/patients-bg.png",
            alt: "Forest Background"
        }
    } satisfies KnowMoreTallSectionProps
};
