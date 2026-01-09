"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function BecomeCertifiedPage() {
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
                        Certification Program
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                        Become MORE Certified
                    </h1>

                    <p className="text-xl text-stone-600 leading-relaxed mb-12">
                        Join a global network of certified practitioners delivering evidence-based mindfulness interventions.
                    </p>

                    <div className="prose prose-stone max-w-none">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">
                            Certification Overview
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            Our comprehensive certification program equips mental health professionals, counselors, and healthcare providers with the skills to deliver MORE therapy effectively.
                        </p>

                        <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-8">
                            What You'll Learn
                        </h3>
                        <ul className="space-y-3 text-stone-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Core principles of Mindfulness-Oriented Recovery Enhancement</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Evidence-based techniques for addiction and pain management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Practical application through case studies and role-playing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Integration strategies for various clinical settings</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-8">
                            Program Structure
                        </h3>
                        <div className="space-y-4">
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                                <h4 className="font-bold text-stone-900 mb-2">Level 1: Foundations</h4>
                                <p className="text-stone-600">
                                    Introduction to MORE principles, mindfulness techniques, and basic intervention strategies.
                                </p>
                            </div>
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                                <h4 className="font-bold text-stone-900 mb-2">Level 2: Advanced Practice</h4>
                                <p className="text-stone-600">
                                    Deep dive into clinical applications, advanced techniques, and specialized populations.
                                </p>
                            </div>
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                                <h4 className="font-bold text-stone-900 mb-2">Level 3: Certification</h4>
                                <p className="text-stone-600">
                                    Supervised practice, case consultation, and final certification assessment.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">
                                Ready to Begin Your Journey?
                            </h3>
                            <p className="text-stone-600 mb-6">
                                Contact us to learn more about upcoming certification programs and enrollment details.
                            </p>
                            <button className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
                                Request Information
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
