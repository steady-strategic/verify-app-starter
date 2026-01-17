import React from "react";
import { TextHowItWorks } from "@/components/sections";

export default function TestPage() {
    const features = [
        {
            title: "Mindfulness",
            description: "A form of mental training focused on strengthening self-awareness and self-regulation to help people observe their thoughts, emotions, and sensations without being swept away by them. Through practice, patients learn to transform addictive habits, craving, and chronic pain by exercising neural networks involved in attention, emotion regulation, and pain processing.",
            iconSrc: "/assets/images/lotus-flower-white.svg",
            iconBgColor: "#E879F9",
        },
        {
            title: "Reappraisal",
            description: "A cognitive strategy used to reframe distressing thoughts, negative core beliefs, or unhelpful interpretations of challenging life situations. Instead of suppressing or ignoring difficult emotions, patients learn to efficiently engage prefrontal brain resources to shift their perspective in ways that reduce suffering and create healthier patterns of behavior.",
            iconSrc: "/assets/images/reappraisal-icon.svg",
            iconBgColor: "#FFA500",
        },
        {
            title: "Savoring",
            description: "A deliberate practice of amplifying positive emotions, reconnecting with natural rewards, and restoring the capacity to feel healthy pleasure, meaning, and joy. Because addiction, pain, depression, and trauma can disrupt the brain’s reward system, savoring helps heal this dysfunction by directing attention toward positive experiences and retraining the mind to appreciate life.",
            iconSrc: "/assets/images/savoring-icon.svg",
            iconBgColor: "#00D4FF",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <TextHowItWorks
                header="Over the course of 8 weekly sessions, patients will experience guided meditations in a group or individual setting that guide them through mindfulness, reappraisal and savoring."
                features={features}
            />
        </div>
    );
}
