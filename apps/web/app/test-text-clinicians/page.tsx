import React from "react";
import { TextHowItWorks } from "@/components/sections";

export default function TestPage() {
    const features = [
        {
            title: "Understand the Science Behind Suffering",
            description: "Dive into the latest theoretical frameworks connecting pain, emotional dysregulation, and addiction through transdiagnostic neurobehavioral mechanisms.",
            iconSrc: "/assets/images/chart-line.svg",
            iconBgColor: "#E1EFFE",
        },
        {
            title: "Master Innovative Techniques",
            description: "Learn to deliver powerful mindfulness, cognitive reappraisal, and savoring techniques that go beyond traditional approaches.",
            iconSrc: "/assets/images/scales.svg",
            iconBgColor: "#E1EFFE",
        },
        {
            title: "Boost Patient Engagement & Motivation",
            description: "Practice novel mind-body processing strategies that enhance self-efficacy, and foster deeper resonance and therapeutic alliance.",
            iconSrc: "/assets/images/meditation-bowl.svg",
            iconBgColor: "#E1EFFE",
        },
        {
            title: "Finance",
            description: "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
            iconSrc: "/assets/images/dollar-sign.svg",
            iconBgColor: "#E1EFFE",
        },
        {
            title: "Enterprise Design",
            description: "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
            iconSrc: "/assets/images/palette.svg",
            iconBgColor: "#E1EFFE",
        },
        {
            title: "Operations",
            description: "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
            iconSrc: "/assets/images/layers.svg",
            iconBgColor: "#E1EFFE",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <TextHowItWorks
                variant="clinicians"
                header="Over the course of 13 hours of training, you can expect to learn:"
                features={features}
            />
        </div>
    );
}
