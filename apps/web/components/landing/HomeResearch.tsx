import React from "react";
import { Cards } from "../sections";

const homeResearchContent = {
    headline: {
        text: "Backed by $90M in federal research grants and 16+ clinical trials, MORE is proven to be 3x as effective as standard therapy",
        highlight: "MORE",
    },
    cards: [
        {
            title: "Clinically significant pain relief",
            stats: [
                "30% reduction in acute pain",
                "45% reduction in post-operative pain",
                "59% success rate in treating chronic pain",
            ],
        },
        {
            title: "Proven reductions in opioid misuse",
            stats: [
                "45% reduction in opioid misuse",
                "59% reduction in treatment dropout",
                "31% reduction in opioid dose",
            ],
        },
        {
            title: "Fewer cravings, greater resilience",
            stats: [
                "50% reduction in drug craving",
                "27% reduction in alcohol craving",
                "30% reduction in cigarette craving",
            ],
        },
        {
            title: "Measurable improvements in emotional well-being",
            stats: [
                "43% reduction in anxiety",
                "38% improvement in depression",
                "2.75× greater increase in positive emotion vs. standard therapy",
            ],
        },
    ],
    cta: {
        label: "See the Research",
        href: "/resources/research",
    },
};

export default function HomeResearch() {
    return <Cards {...homeResearchContent} />;
}
