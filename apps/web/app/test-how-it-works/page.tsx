"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function HowItWorksTestPage() {
    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
            <Navbar scrolled={true} />

            <main className="pt-24 pb-24">
                <HowItWorks
                    title="Carefully curated structure 3 step, 8 week program based on years of research"
                    subtitle="Mindfulness"
                    steps={["Step 1", "Step 2", "Step 3"]}
                    cards={[
                        {
                            title: "Guided Meditations",
                            iconSrc: "/assets/images/meditation-icon.svg",
                            iconColor: "#e704e7",
                        },
                        {
                            title: "Reappraisal",
                            iconSrc: "/assets/images/reappraisal-icon.svg",
                            iconColor: "#f59e0b",
                        },
                        {
                            title: "Savoring",
                            iconSrc: "/assets/images/savoring-icon.svg",
                            iconColor: "#06b6d4",
                        },
                    ]}
                    research="As your prefrontal cortex grows - your cravings decrease and your capacity for joy increases"
                    variant="default"
                    id="how-it-works-test"
                />
            </main>

            <Footer />
        </div>
    );
}
