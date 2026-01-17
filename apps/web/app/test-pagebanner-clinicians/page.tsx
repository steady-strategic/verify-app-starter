import React from "react";
import { PageBanner } from "@/components/sections";

export default function TestPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <PageBanner
                variant="more-institute"
                title="MORE Institute"
                description={[
                    "We are a non-profit organization dedicated to bringing research-backed relief to people suffering from chronic pain, addiction, and emotional distress.",
                ]}
                backgroundImage={{
                    src: "/assets/images/background.png",
                    alt: "Background",
                }}
                foregroundImage={{
                    src: "/assets/images/therapist-client.png",
                    alt: "Therapist and Client",
                }}
            />
        </div>
    );
}
