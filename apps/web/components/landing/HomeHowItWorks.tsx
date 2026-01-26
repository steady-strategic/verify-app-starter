
import React from "react";
import { HowItWorks } from "../sections/HowItWorks";

export default function HomeHowItWorks() {
    return (
        <HowItWorks
            variant="r1"
            title="For those struggling with addiction, chronic pain, or emotional distress, MORE provides a clear and supportive path forward."
            description="Over the course of eight weekly sessions, MORE is delivered as a carefully curated three step process."
            subtitle="Mindfulness"
            steps={["Step 1", "Step 2", "Step 3"]}
            cards={[
                {
                    title: "Guided Meditation",
                    iconSrc: "/assets/images/guided-meditation-icon.svg",
                    iconColor: "#fae8ff"
                },
                {
                    title: "Reappraisal",
                    iconSrc: "/assets/images/reappraisal-icon.svg",
                    iconColor: "#fae8ff"
                },
                {
                    title: "Savoring",
                    iconSrc: "/assets/images/savoring-icon.svg",
                    iconColor: "#fae8ff"
                }
            ]}
            research="As your prefrontal cortex grows, your cravings decrease and your capacity for joy increases."
        />
    );
}
