"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

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
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
            <Navbar scrolled={scrolled} />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                        For Clinicians
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                        MORE for Clinicians
                    </h1>

                    <p className="text-xl text-stone-600 leading-relaxed mb-12">
                        Discover evidence-based mindfulness interventions for addiction and chronic pain treatment.
                    </p>

                    <div className="prose prose-stone max-w-none">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">
                            Transform Your Practice
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            Mindfulness-Oriented Recovery Enhancement (MORE) is a comprehensive intervention that integrates mindfulness training, reappraisal, and savoring techniques to address addiction, chronic pain, and emotional distress.
                        </p>

                        <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-8">
                            Why Choose MORE?
                        </h3>
                        <ul className="space-y-3 text-stone-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Evidence-based intervention backed by over 200 scientific papers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Proven effective for addiction recovery and chronic pain management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Comprehensive training and certification programs available</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Join a growing community of certified MORE practitioners</span>
                            </li>
                        </ul>

                        <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">
                                Ready to Get Started?
                            </h3>
                            <p className="text-stone-600 mb-6">
                                Learn more about becoming a certified MORE practitioner and bringing this transformative approach to your clients.
                            </p>
                            <a
                                href="/clinicians/certified"
                                className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
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
