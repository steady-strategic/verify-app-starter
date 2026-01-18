import React from 'react';
import { Content } from '@/components/sections/Content';

export default function TestContentSwapPage() {
    return (
        <div className="bg-white min-h-screen">
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
        </div>
    );
}
