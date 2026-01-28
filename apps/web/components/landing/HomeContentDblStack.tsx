
import React from "react";
import { ContentDblStack } from "../sections/ContentDblStack";

export default function HomeContentDblStack() {
    return (
        <ContentDblStack
            items={[
                {
                    heading: "For Clinicians",
                    description: "Provide evidence-based mindfulness therapy to treat addiction, pain, and emotional distress.",
                    features: [
                        "Learn how to provide MORE therapy in your own practice",
                        "Access asynchronous and on-demand training",
                        "Earn CEUs plus enhance your credentials",
                        "Bring lasting and meaningful relief to your clients"
                    ],
                    image: {
                        src: "/assets/images/clinician-hero-stack.png",
                        alt: "Clinician Hero Stack"
                    },
                    cta: {
                        text: "Learn MORE",
                        href: "/clinicians"
                    },
                    reverse: false
                },
                {
                    heading: "For Patients",
                    description: "Get relief from addiction, pain, and emotional distress.",
                    features: [
                        "Learn to transform addictive habits, craving, and chronic pain",
                        "Reframe distressing thoughts and negative core beliefs",
                        "Amplify positive emotions and reconnect with natural rewards",
                        "Experience powerful and lasting change with just 8 weekly sessions"
                    ],
                    image: {
                        src: "/assets/images/patient-hero-stack.jpg",
                        alt: "Patient Hero Stack"
                    },
                    cta: {
                        text: "Learn MORE",
                        href: "/patients"
                    },
                    reverse: true
                }
            ]}
        />
    );
}
