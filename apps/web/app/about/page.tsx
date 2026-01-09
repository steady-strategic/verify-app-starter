"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
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
                        About
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                        About Us
                    </h1>

                    <p className="text-xl text-stone-600 leading-relaxed mb-12">
                        Transforming lives through evidence-based mindfulness interventions.
                    </p>

                    <div className="prose prose-stone max-w-none">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-8">
                            We are dedicated to advancing the science and practice of Mindfulness-Oriented Recovery Enhancement (MORE) to help individuals overcome addiction, manage chronic pain, and rediscover meaning in their lives.
                        </p>

                        <h2 className="text-3xl font-bold text-stone-900 mb-4 mt-12">
                            Our Story
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            MORE was developed by Dr. Eric Garland, PhD, LCSW, a leading researcher in mindfulness-based interventions and addiction treatment. With over $50 million in NIH research funding and more than 200 peer-reviewed publications, MORE has become one of the most rigorously studied mindfulness interventions in the world.
                        </p>

                        {/* Founder Section */}
                        <div className="my-12 p-8 bg-stone-50 rounded-lg border border-stone-100">
                            <div className="flex items-start space-x-6">
                                <img
                                    src="https://picsum.photos/id/64/120/120"
                                    alt="Dr. Eric Garland"
                                    className="w-24 h-24 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-2">
                                        Dr. Eric Garland
                                    </h3>
                                    <p className="text-stone-600 mb-4">
                                        Founder of MORE, PhD, LCSW
                                    </p>
                                    <p className="text-stone-600 leading-relaxed italic">
                                        "Through mindfulness, we can restructure how our brains perceive pleasure and pain, turning toward natural rewards and away from cravings."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-stone-900 mb-4 mt-12">
                            Our Impact
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 bg-white border border-stone-100 rounded-lg text-center">
                                <p className="text-4xl font-bold text-stone-900 mb-2">15,000+</p>
                                <p className="text-stone-600 text-sm">Lives Impacted</p>
                            </div>
                            <div className="p-6 bg-white border border-stone-100 rounded-lg text-center">
                                <p className="text-4xl font-bold text-stone-900 mb-2">500+</p>
                                <p className="text-stone-600 text-sm">Certified Practitioners</p>
                            </div>
                            <div className="p-6 bg-white border border-stone-100 rounded-lg text-center">
                                <p className="text-4xl font-bold text-stone-900 mb-2">30+</p>
                                <p className="text-stone-600 text-sm">Countries Reached</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-stone-900 mb-4 mt-12">
                            Our Values
                        </h2>
                        <div className="space-y-4 mb-8">
                            <div className="p-6 bg-white border border-stone-100 rounded-lg">
                                <h3 className="text-xl font-bold text-stone-900 mb-2">
                                    Evidence-Based Practice
                                </h3>
                                <p className="text-stone-600">
                                    Every aspect of MORE is grounded in rigorous scientific research and clinical evidence.
                                </p>
                            </div>
                            <div className="p-6 bg-white border border-stone-100 rounded-lg">
                                <h3 className="text-xl font-bold text-stone-900 mb-2">
                                    Compassionate Care
                                </h3>
                                <p className="text-stone-600">
                                    We approach healing with empathy, understanding, and respect for each individual's journey.
                                </p>
                            </div>
                            <div className="p-6 bg-white border border-stone-100 rounded-lg">
                                <h3 className="text-xl font-bold text-stone-900 mb-2">
                                    Accessibility
                                </h3>
                                <p className="text-stone-600">
                                    We strive to make MORE therapy available to all who need it, regardless of background or circumstance.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">
                                Join Our Community
                            </h3>
                            <p className="text-stone-600 mb-6">
                                Whether you're a clinician, researcher, or someone seeking healing, we invite you to be part of the MORE movement.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/clinicians/certified"
                                    className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
                                >
                                    Become Certified
                                </a>
                                <a
                                    href="/directory"
                                    className="inline-block px-6 py-3 bg-white border-2 border-stone-900 text-stone-900 font-semibold rounded-full hover:bg-stone-50 transition-all active:scale-95"
                                >
                                    Find a Clinician
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
