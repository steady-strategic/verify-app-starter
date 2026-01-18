import React from "react";
import { Content } from "@/components/sections";

export default function HomeContentSwap() {
    return (
        <section className="py-16 bg-white">
            <Content
                variant="swap"
                title="For Clinicians"
                subtitle="Empower your practice with tools that streamline your workflow and enhance patient care."
                features={[
                    { text: "Streamlined patient management" },
                    { text: "Integrated therapy tools" },
                    { text: "Secure communication channels" },
                    { text: "Comprehensive progress tracking" },
                ]}
                image={{
                    src: "/assets/images/therapist-client.png",
                    alt: "Therapist with client",
                }}
            />
        </section>
    );
}
