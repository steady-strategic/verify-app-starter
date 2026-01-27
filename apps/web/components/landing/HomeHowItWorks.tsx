
import React from "react";
import { HowItWorks } from "../sections/HowItWorks";

export default function HomeHowItWorks() {
    return (
        <HowItWorks
            variant="home"
            sectionHeader={
                <>
                    For those struggling with addiction, chronic pain, or emotional distress, <span style={{ color: "#D80ADA" }}>MORE</span> provides a powerful and proven path forward.
                </>
            }
            title={
                <>
                    Over the course of eight weekly sessions, <span style={{ color: "#D80ADA" }}>MORE</span> is delivered as a carefully curated, research-validated, three-step process.
                </>
            }
            subtitle="Mindfulness"
            steps={["Step 1", "Step 2", "Step 3"]}
            cards={[
                {
                    title: "Guided Meditation",
                    iconSrc: "/assets/images/meditate3.svg",
                    iconColor: "#F4F4F4"
                },
                {
                    title: "Reappraisal",
                    iconSrc: "/assets/images/reappraise3.svg",
                    iconColor: "#F4F4F4"
                },
                {
                    title: "Savoring",
                    iconSrc: "/assets/images/heart3.svg",
                    iconColor: "#F4F4F4"
                }
            ]}
            research="As your prefrontal cortex grows, your cravings decrease and your capacity for joy increases."
        />
    );
}
