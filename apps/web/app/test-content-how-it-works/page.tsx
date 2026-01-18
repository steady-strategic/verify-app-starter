
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Content } from '@/components/sections/Content';

export default function TestContentHowItWorksPage() {
    return (
        <div className="min-h-screen bg-colors-white">
            <Navbar variant="dark" />
            <main className="pt-20 pb-20">
                <Content
                    variant="Content-HowItWorks"
                    title="MORE isn't just about reducing symptoms"
                    subtitle="it's about helping people flourish. Most mindfulness programs stop at awareness. MORE goes further, guiding patients to:"
                    features={[
                        { text: "Transform negative emotions into positive growth" },
                        { text: "Reclaim a sense of meaning and purpose in life" },
                        { text: "Experience deep, restorative states of well-being" }
                    ]}
                    image={{
                        src: "/assets/images/content-how-it-works.png",
                        alt: "Mindfulness hero"
                    }}
                />
            </main>
            <Footer />
        </div>
    );
}
