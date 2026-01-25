
import React from "react";
import { HowItWorks } from "../../components/sections/HowItWorks";
import { TextHowItWorks } from "../../components/sections/TextHowItWorks";

export default function TestVariantPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <h1 className="p-8 text-2xl font-bold bg-white mb-8 border-b">Testing Variants</h1>

            <div className="mb-20">
                <h2 className="p-6 text-xl font-semibold text-gray-400">HowItWorks (r1)</h2>
                <HowItWorks
                    variant="r1"
                    title="For those struggling with addiction, chronic pain, or emotional distress, MORE provides a clear and supportive path forward."
                    subtitle="Mindfulness"
                    steps={["Step 1", "Step 2", "Step 3"]}
                    cards={[
                        {
                            title: "Guided Meditation",
                            iconSrc: "/assets/images/guided-meditation-icon.svg",
                            iconColor: "#fae8ff" // light pink bg
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
            </div>

            <div className="mb-20">
                <h2 className="p-6 text-xl font-semibold text-gray-400">TextHowItWorks (r1)</h2>
                <TextHowItWorks
                    variant="r1"
                    header="MORE is a structured, rigorously-tested therapeutic protocol. Patients engage in mind-body training, delivered individually or in a group setting, to learn unique mindfulness, reappraisal, and savoring skills to strengthen recovery and generate well-being."
                    features={[
                        {
                            title: "Mindfulness",
                            description: "A form of mental training focused on strengthening self-awareness and self-regulation to help people observe their thoughts, emotions, and sensations without being swept away by them.",
                            iconSrc: "/assets/images/lotus-mindfulness-icon.svg",
                            iconBgColor: "#d946ef"
                        },
                        {
                            title: "Reappraisal",
                            description: "A cognitive strategy used to reframe distressing thoughts, negative core beliefs, or unhelpful interpretations of challenging life situations.",
                            iconSrc: "/assets/images/lotus-reappraisal-icon.svg",
                            iconBgColor: "#d946ef"
                        },
                        {
                            title: "Savoring",
                            description: "A deliberate practice of amplifying positive emotions, reconnecting with natural rewards, and restoring the capacity to feel healthy pleasure, meaning, and joy.",
                            iconSrc: "/assets/images/lotus-savoring-icon.svg",
                            iconBgColor: "#d946ef"
                        }
                    ]}
                />
            </div>
        </div>
    );
}
