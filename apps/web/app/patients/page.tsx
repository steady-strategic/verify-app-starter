"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Content } from "@/components/sections";
import { useState, useEffect } from "react";

export default function PatientsPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
            <Navbar scrolled={scrolled} />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                        For Patients
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                        MORE for Patients
                    </h1>

                    <p className="text-xl text-stone-600 leading-relaxed mb-12">
                        Discover a mindfulness-based approach to healing from addiction and chronic pain.
                    </p>

                    {/* Content Section Component */}
                    <div className="mb-16 -mx-6">
                        <Content
                            title="For Patients"
                            subtitle="Get relief from chronic pain, addiction, stress, depression and more."
                            features={[
                                { text: "Learn to transform addictive habits, craving, and chronic pain" },
                                { text: "Reframe distressing thoughts and negative core beliefs" },
                                { text: "Amplify positive emotions and reconnect with natural rewards" },
                                { text: "Experience powerful and lasting change with just 5 weekly sessions" },
                            ]}
                            image={{
                                src: "/assets/images/patient-hero-image.jpg",
                                alt: "Patient experiencing relief",
                            }}
                        />
                    </div>

                    <div className="prose prose-stone max-w-none">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">
                            A Path to Recovery
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            MORE therapy helps you develop new ways of relating to pain, cravings, and difficult emotions through mindfulness, reappraisal, and savoring positive experiences.
                        </p>

                        <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-8">
                            What to Expect
                        </h3>
                        <ul className="space-y-3 text-stone-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Learn mindfulness techniques to manage pain and cravings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Develop healthier ways of thinking about challenging experiences</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Rediscover natural sources of pleasure and meaning in life</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Build resilience and emotional regulation skills</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-8">
                            Is MORE Right for You?
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            MORE therapy has been shown to be effective for individuals struggling with:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                                <h4 className="font-bold text-stone-900 mb-2">Addiction Recovery</h4>
                                <p className="text-stone-600 text-sm">
                                    Substance use disorders, prescription medication dependence, and behavioral addictions.
                                </p>
                            </div>
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                                <h4 className="font-bold text-stone-900 mb-2">Chronic Pain</h4>
                                <p className="text-stone-600 text-sm">
                                    Long-term pain conditions that impact daily functioning and quality of life.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">
                                Find a MORE Clinician
                            </h3>
                            <p className="text-stone-600 mb-6">
                                Connect with a certified MORE practitioner in your area to begin your healing journey.
                            </p>
                            <a
                                href="/directory"
                                className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
                            >
                                Search Directory
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
