"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { PageBanner } from "@/components/sections/PageBanner";

export default function ResearchPage() {
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

            <main className="pb-24 pt-24 md:pt-32">
                <PageBanner
                    variant="Research"
                    title="Research"
                    subtitle={"MORE™ Delivers Powerful\nClinical Results"}
                    description={["Explore the scientific evidence supporting Mindfulness-Oriented Recovery Enhancement."]}
                    backgroundImage={{
                        src: "/assets/images/background-gradient.png",
                        alt: "Background Gradient"
                    }}
                    foregroundImage={{
                        src: "/assets/images/brain-illustration.png",
                        alt: "Brain Illustration"
                    }}
                    className="mb-12"
                />

                <div className="container mx-auto px-6 max-w-4xl">

                    <div className="prose prose-stone max-w-none">
                        {/* Stats Section */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100 text-center">
                                <p className="text-4xl font-bold text-stone-900 mb-2">200+</p>
                                <p className="text-stone-600 text-sm">Scientific Papers</p>
                            </div>
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100 text-center">
                                <p className="text-4xl font-bold text-stone-900 mb-2">$50M+</p>
                                <p className="text-stone-600 text-sm">NIH Research Funding</p>
                            </div>
                            <div className="p-6 bg-stone-50 rounded-lg border border-stone-100 text-center">
                                <p className="text-4xl font-bold text-stone-900 mb-2">15k+</p>
                                <p className="text-stone-600 text-sm">Lives Impacted</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-stone-900 mb-4">
                            Key Research Areas
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-8">
                            MORE has been extensively studied across multiple populations and clinical settings.
                        </p>

                        {/* Research Categories */}
                        <div className="space-y-6 mb-12">
                            <div className="p-6 bg-white border border-stone-100 rounded-lg">
                                <h3 className="text-xl font-bold text-stone-900 mb-3">
                                    Addiction & Substance Use
                                </h3>
                                <p className="text-stone-600 mb-4">
                                    Clinical trials demonstrating MORE's effectiveness in treating opioid use disorder, alcohol dependence, and prescription medication misuse.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Opioid Use Disorder
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Alcohol Dependence
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Prescription Misuse
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 bg-white border border-stone-100 rounded-lg">
                                <h3 className="text-xl font-bold text-stone-900 mb-3">
                                    Chronic Pain Management
                                </h3>
                                <p className="text-stone-600 mb-4">
                                    Studies showing significant pain reduction and improved quality of life for individuals with chronic pain conditions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Chronic Back Pain
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Fibromyalgia
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Neuropathic Pain
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 bg-white border border-stone-100 rounded-lg">
                                <h3 className="text-xl font-bold text-stone-900 mb-3">
                                    Neuroscience & Mechanisms
                                </h3>
                                <p className="text-stone-600 mb-4">
                                    Neuroimaging and psychophysiological research revealing how MORE changes brain function and emotional regulation.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Brain Imaging
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Reward Processing
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                        Stress Response
                                    </span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-stone-900 mb-4 mt-12">
                            Featured Publications
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                                        Journal of Clinical Psychology • 2024
                                    </p>
                                    <h4 className="font-bold text-stone-900 mb-2">
                                        Sample Research Title: MORE Intervention Outcomes Study {i}
                                    </h4>
                                    <p className="text-stone-600 text-sm mb-3">
                                        Garland, E.L., et al. - A comprehensive examination of treatment efficacy and mechanisms.
                                    </p>
                                    <button className="text-amber-700 font-semibold text-sm hover:text-amber-800">
                                        Read Full Paper →
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">
                                Access Full Research Library
                            </h3>
                            <p className="text-stone-600 mb-6">
                                Explore our complete collection of peer-reviewed publications and research findings.
                            </p>
                            <button className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
                                View All Publications
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
