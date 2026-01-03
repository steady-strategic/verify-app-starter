"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/landing/Hero";
import { AppFeature } from "../components/landing/AppFeature";
import { Evidence } from "../components/landing/Evidence";
import { BlogSection } from "../components/blog/BlogSection";

// Sample stories data (will be replaced with database in Phase 7)
const SAMPLE_STORIES = [
    {
        id: 1,
        title: "From Pain to Presence: Sarah's Journey",
        excerpt: "After ten years of chronic back pain and prescription dependencies, Sarah discovered a new way to interact with sensation.",
        category: "Success Story",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        title: "The Neurobiology of Savoring",
        excerpt: "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
        category: "Science",
        date: "March 02, 2024",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Mindfulness in the Moment",
        excerpt: "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
        category: "Technique",
        date: "Feb 18, 2024",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
];

export default function HomePage() {
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

            <main>
                <Hero />

                {/* Stats Section */}
                <section className="py-12 bg-amber-50/30 border-y border-stone-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-center">
                            <div>
                                <p className="text-4xl font-bold text-stone-800 mb-1">200+</p>
                                <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">
                                    Scientific Papers
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-stone-800 mb-1">$50M+</p>
                                <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">
                                    NIH Research Funding
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-stone-800 mb-1">15k+</p>
                                <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">
                                    Lives Impacted
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <AppFeature />
                <Evidence />
                <BlogSection stories={SAMPLE_STORIES} />

                {/* Founder Quote Section */}
                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                            Foundational Insight
                        </span>
                        <h2 className="text-3xl md:text-4xl italic text-stone-700 leading-relaxed mb-8">
                            "Through mindfulness, we can restructure how our brains perceive
                            pleasure and pain, turning toward natural rewards and away from
                            cravings."
                        </h2>
                        <div className="flex items-center justify-center space-x-4">
                            <img
                                src="https://picsum.photos/id/64/100/100"
                                alt="Dr. Eric Garland"
                                className="w-16 h-16 rounded-full border-2 border-white shadow-sm"
                            />
                            <div className="text-left">
                                <p className="font-bold text-stone-900">Dr. Eric Garland</p>
                                <p className="text-stone-500 text-sm">Founder of MORE, PhD, LCSW</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
