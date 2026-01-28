import React from "react";
import { HomeResearch } from "../sections";

const homeResearchContent = {
    heading: "Backed by $90M in federal research grants and 16+ clinical trials, <span class='text-[#d80ada]'>MORE</span> is proven to be 3x as effective as standard therapy",
    features: [
        {
            title: "Dramatically reduces addiction and misuse",
            stats: [
                {
                    value: "50%",
                    label: "reduction in drug craving",
                },
                {
                    value: "59%",
                    label: "reduction in treatment dropout",
                },
                {
                    value: "42%",
                    label: "reduction in drug relapse",
                },
            ],
        },
        {
            title: "Clinically significant pain relief",
            stats: [
                {
                    value: "30%",
                    label: "reduction in acute pain",
                },
                {
                    value: "45%",
                    label: "reduction in post-operative pain",
                },
                {
                    value: "59%",
                    label: "success rate in treating chronic pain",
                },
            ],
        },
        {
            title: "Measurable improvements in emotional well-being",
            stats: [
                {
                    value: "43%",
                    label: "reduction in anxiety",
                },
                {
                    value: "38%",
                    label: "improvement in depression",
                },
                {
                    value: "59%",
                    label: "success rate in treating PTSD",
                },
            ],
        },
    ],
    cta: {
        text: "Read the Research",
        href: "/resources/research",
    },
};

export default function HomeResearchLanding() {
    return <HomeResearch {...homeResearchContent} />;
}
