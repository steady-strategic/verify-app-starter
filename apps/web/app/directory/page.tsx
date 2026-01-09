"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function DirectoryPage() {
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
                <div className="container mx-auto px-6 max-w-6xl">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                        Clinician Directory
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                        Find a MORE Clinician
                    </h1>

                    <p className="text-xl text-stone-600 leading-relaxed mb-12">
                        Connect with certified MORE practitioners in your area.
                    </p>

                    {/* Search Section */}
                    <div className="mb-12 p-8 bg-stone-50 rounded-lg border border-stone-100">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">
                            Search for a Clinician
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="City or ZIP Code"
                                className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <select className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                                <option>All States</option>
                                <option>California</option>
                                <option>New York</option>
                                <option>Texas</option>
                            </select>
                            <button className="px-6 py-3 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-all active:scale-95">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Placeholder Results */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-stone-900 mb-6">
                            Certified Practitioners
                        </h2>

                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-6 bg-white border border-stone-100 rounded-lg hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2">
                                            Dr. Sample Clinician {i}
                                        </h3>
                                        <p className="text-stone-600 mb-2">
                                            Licensed Clinical Social Worker (LCSW)
                                        </p>
                                        <p className="text-stone-500 text-sm mb-4">
                                            📍 Sample City, ST • 🏥 Private Practice
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                                Addiction
                                            </span>
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                                Chronic Pain
                                            </span>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100 text-center">
                        <h3 className="text-2xl font-bold text-stone-900 mb-4">
                            Are You a Certified MORE Clinician?
                        </h3>
                        <p className="text-stone-600 mb-6">
                            Join our directory to connect with patients seeking MORE therapy.
                        </p>
                        <button className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
                            Add Your Profile
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
