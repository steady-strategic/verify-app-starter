"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/sections/PageBanner";
import { useState, useEffect } from "react";
import { ContactClinicianForm } from "./ContactClinicianForm";

interface Clinician {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    city: string;
    state: string;
    zipCode: string | null;
    image: string | null;
    bio: string | null;
    specialties: string[];
    email: string | null;
    phone: string | null;
    website: string | null;
}

interface DirectoryClientProps {
    initialClinicians: Clinician[];
}

export function DirectoryClient({ initialClinicians }: DirectoryClientProps) {
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedState, setSelectedState] = useState("All States");
    const [filteredClinicians, setFilteredClinicians] = useState(initialClinicians);
    const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = initialClinicians.filter((clinician) => {
            const matchesSearch =
                clinician.firstName.toLowerCase().includes(query) ||
                clinician.lastName.toLowerCase().includes(query) ||
                clinician.city.toLowerCase().includes(query) ||
                (clinician.zipCode && clinician.zipCode.includes(query));

            const matchesState =
                selectedState === "All States" ||
                clinician.state === selectedState;

            return matchesSearch && matchesState;
        });
        setFilteredClinicians(filtered);
    }, [searchQuery, selectedState, initialClinicians]);

    // Unique states for dropdown
    const states = ["All States", ...Array.from(new Set(initialClinicians.map(c => c.state).filter(Boolean))).sort()];

    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
            <Navbar scrolled={scrolled} />

            <main className="pt-20">
                <PageBanner
                    variant="directory"
                    title="Find a Clinician"
                    description={["Looking to receive MORE therapy? Find a certified clinician near you."]}
                    backgroundImage={{
                        src: "/assets/images/page-banner-directory-bg.png",
                        alt: "Directory Background",
                    }}
                />

                <div className="container mx-auto px-6 max-w-6xl mt-12">
                    {/* Search Section */}
                    <div className="mb-12 p-8 bg-stone-50 rounded-lg border border-stone-100">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">
                            Search for a Clinician
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Name, City or ZIP Code"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                {states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                            <button className="px-6 py-3 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-all active:scale-95">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-stone-900 mb-6">
                            Certified Practitioners ({filteredClinicians.length})
                        </h2>

                        {filteredClinicians.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6 justify-items-center">
                                {filteredClinicians.map((clinician) => (
                                    <div
                                        key={clinician.id}
                                        className={`bg-white border border-stone-100 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden group w-full max-w-[592px] ${expandedCardId === clinician.id ? 'h-[509px] flex flex-col' : 'h-[309px] flex flex-row'
                                            }`}
                                    >
                                        {expandedCardId === clinician.id ? (
                                            <ContactClinicianForm
                                                onClose={() => setExpandedCardId(null)}
                                                clinicianEmail={clinician.email}
                                            />
                                        ) : (
                                            <>
                                                <div className="relative w-[220px] h-full bg-stone-100 overflow-hidden shrink-0">
                                                    {clinician.image ? (
                                                        <img
                                                            src={clinician.image}
                                                            alt={`${clinician.firstName} ${clinician.lastName}`}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-stone-300 bg-stone-50">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 shadow-sm">
                                                        {clinician.title}
                                                    </div>
                                                </div>

                                                <div className="p-6 flex-1 flex flex-col min-w-0">
                                                    <div className="mb-3">
                                                        <h3 className="text-xl font-serif font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors truncate">
                                                            {clinician.firstName} {clinician.lastName}
                                                        </h3>
                                                        <p className="text-sm font-medium text-stone-500 flex items-center truncate">
                                                            <span className="mr-1">📍</span>
                                                            {clinician.city}, {clinician.state}
                                                        </p>
                                                    </div>

                                                    {clinician.specialties.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mb-4 h-[26px] overflow-hidden">
                                                            {clinician.specialties.slice(0, 2).map((tag, idx) => (
                                                                <span key={idx} className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wider font-semibold rounded-md whitespace-nowrap">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                            {clinician.specialties.length > 2 && (
                                                                <span className="px-2 py-1 bg-stone-50 text-stone-400 text-[10px] uppercase tracking-wider font-semibold rounded-md whitespace-nowrap">
                                                                    +{clinician.specialties.length - 2}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}

                                                    {clinician.bio && (
                                                        <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                                                            {clinician.bio}
                                                        </p>
                                                    )}

                                                    <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                                                        <button
                                                            onClick={() => setExpandedCardId(clinician.id)}
                                                            className="text-stone-900 hover:text-amber-700 font-semibold text-sm flex items-center group/link transition-colors focus:outline-none"
                                                        >
                                                            Contact
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </button>
                                                        {clinician.phone && (
                                                            <span className="text-xs text-stone-400 font-mono">
                                                                {clinician.phone}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-stone-50 rounded-2xl border border-stone-100 border-dashed">
                                <div className="text-4xl mb-4 opacity-50">🔍</div>
                                <h3 className="text-lg font-bold text-stone-900 mb-1">No clinicians found</h3>
                                <p className="text-stone-500 text-sm">Try adjusting your search or filters.</p>
                            </div>
                        )}
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
