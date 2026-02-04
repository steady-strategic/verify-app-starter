import { PageBannerSectionProps } from "@/components/sections/types";
import React from "react";

export const cliniciansCertifiedContent = {
    pageBanner: {
        variant: "training",
        title: (
            <span>
                <span className="text-primary-1">MORE</span> <span className="text-gray-700">Training</span>
            </span>
        ),
        subtitle: (
            <span className="text-gray-900 font-bold">
                Learn how to deliver MORE in your own practice. MORE Institute is an interactive learning platform that offers:
            </span>
        ),
        description: (
            <div className="text-gray-900 text-lg flex flex-col gap-4">
                <ul className="list-disc pl-6 space-y-2">
                    <li>Engaging asynchronous and on-demand training to become MORE certified</li>
                    <li>CE-eligible and reimbursable</li>
                    <li>Professional videos, interactive exercises, and group supervision sessions</li>
                    <li>Ready-to-use tools including scripts, handouts, and guided mind-body techniques</li>
                    <li>Instruction on delivering MORE to patients over eight weekly sessions</li>
                </ul>
                <p>
                    Our on-demand training follows the same proven format as our 2-day live experience, with interactive check-ins throughout to support focus and learning.
                </p>
            </div>
        ),
        backgroundImage: {
            src: "", // Not used in training variant but required by type
            alt: ""
        },
        foregroundImage: {
            src: "/assets/images/PageBanner/Content@2x.png",
            alt: "MORE Training Illustration"
        }
    } satisfies PageBannerSectionProps,
};
