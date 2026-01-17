"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { Cards, PageBanner } from "@/components/sections";

export default function CliniciansPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-cream text-colors-gray-700 font-sans selection:bg-primary-3 selection:text-primary-1">
            <Navbar scrolled={true} />

            <main className="pt-20">
                {/* PageBanner Section */}
                <PageBanner
                    variant="clinicians"
                    title="MORE Institute"
                    description={[
                        "Discover evidence-based mindfulness interventions for addiction and chronic pain treatment.",
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

                {/* Cards Section */}
                <Cards
                    variant="Cards2x3"
                    headline={{
                        text: "Empower your practice with evidence-based interventions",
                        highlight: "evidence-based",
                    }}
                    cards={[
                        {
                            title: "Clinical Impact",
                            stats: [
                                "Reduce patient suffering",
                                "Improve treatment outcomes",
                                "Enhance recovery sustainability",
                            ],
                        },
                        {
                            title: "Professional Growth",
                            stats: [
                                "Expand your therapeutic toolkit",
                                "Earn continuing education credits",
                                "Master new modalities",
                            ],
                        },
                        {
                            title: "Research Backed",
                            stats: [
                                "Built on federal grants",
                                "Validated by clinical trials",
                                "Proven efficacy data",
                            ],
                        },
                        {
                            title: "Community Support",
                            stats: [
                                "Join a network of experts",
                                "Access mentorship opportunities",
                                "Collaborate with peers",
                            ],
                        },
                        {
                            title: "Patient Satisfaction",
                            stats: [
                                "High retention rates",
                                "Positive patient feedback",
                                "Deepened therapeutic trust",
                            ],
                        },
                        {
                            title: "Holistic Care",
                            stats: [
                                "Integrative mind-body approach",
                                "Whole-person focus",
                                "Sustainable wellness tools",
                            ],
                        },
                    ]}
                    cta={{
                        label: "View Certification Program",
                        href: "/clinicians/certified",
                    }}
                />

                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-stone max-w-none">
                        <h2 className="text-3xl font-serif font-bold text-colors-gray-900 mb-4">
                            Transform Your Practice
                        </h2>
                        <p className="text-colors-gray-700 leading-relaxed mb-6">
                            Mindfulness-Oriented Recovery Enhancement (MORE) is a comprehensive intervention that integrates mindfulness training, reappraisal, and savoring techniques to address addiction, chronic pain, and emotional distress.
                        </p>

                        <h3 className="text-2xl font-serif font-bold text-colors-gray-900 mb-4 mt-8">
                            Why Choose MORE?
                        </h3>
                        <ul className="space-y-3 text-colors-gray-700">
                            <li className="flex items-start">
                                <span className="text-primary-1 mr-2">•</span>
                                <span>Evidence-based intervention backed by over 200 scientific papers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-1 mr-2">•</span>
                                <span>Proven effective for addiction recovery and chronic pain management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-1 mr-2">•</span>
                                <span>Comprehensive training and certification programs available</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-1 mr-2">•</span>
                                <span>Join a growing community of certified MORE practitioners</span>
                            </li>
                        </ul>

                        <div className="mt-12 p-8 bg-white rounded-lg border border-primary-1/10 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold text-colors-gray-900 mb-4">
                                Ready to Get Started?
                            </h3>
                            <p className="text-colors-gray-700 mb-6">
                                Learn more about becoming a certified MORE practitioner and bringing this transformative approach to your clients.
                            </p>
                            <a
                                href="/clinicians/certified"
                                className="inline-block px-6 py-3 bg-primary-1 text-white font-semibold rounded-lg hover:bg-primary-2 transition-all active:scale-95"
                            >
                                Become MORE Certified
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
