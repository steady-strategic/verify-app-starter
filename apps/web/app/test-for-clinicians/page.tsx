import React from "react";
import { PageBanner } from "@/components/sections";

export default function TestPageBannerForClinicians() {
    return (
        <div className="min-h-screen">
            <PageBanner
                variant="forClinicians"
                title="MORE for Clinicians"
                subtitle="Provide Real, Lasting Recovery"
                description={[
                    "A transformative approach offering clinicians evidence-based tools for effective addiction and chronic pain treatment.",
                    "Enhance your practice with mindfulness-oriented recovery enhancement techniques backed by extensive research.",
                    "Join a community of professionals dedicated to sustainable healing outcomes.",
                ]}
                backgroundImage={{
                    src: "", // No background image needed for this variant
                    alt: "",
                }}
                foregroundImage={{
                    src: "/assets/images/clinician-therapy-session.png",
                    alt: "Therapist Session",
                }}
            />
        </div>
    );
}
