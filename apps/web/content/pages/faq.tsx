import { FaqAccordionSectionProps } from "@/components/sections/types";
import React from "react";

export const faqContent = {
    faqAccordion: {
        title: "FAQ's",
        items: [
            {
                question: "Can I use MORE in clinical settings?",
                answer: "Yes, MORE is specifically designed for integration into clinical settings. It provides clinicians with a structured, evidence-based protocol that can be delivered in both individual and group therapy formats to treat addiction, chronic pain, and emotional distress."
            },
            {
                question: "Where can I access my download files?",
                answer: "Once you have purchased a course or resource, you can access all downloadable materials directly from your user dashboard under the 'My Downloads' section."
            },
            {
                question: "Can I use MORE for commercial purposes?",
                answer: "The MORE curriculum and training materials are for clinical use by trained professionals. Commercial redistribution or resale of the materials themselves is not permitted without explicit licensing agreements."
            },
            {
                question: "What about browser support?",
                answer: "The MORE online platform and training modules are optimized for all modern web browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience."
            }
        ]
    } satisfies FaqAccordionSectionProps
};
