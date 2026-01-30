"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/sections/PageBanner";
import { useState, useEffect } from "react";

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
                            filteredClinicians.map((clinician) => (
                                <div key={clinician.id} className="p-6 bg-white border border-stone-100 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div className="flex gap-4">
                                            {clinician.image && (
                                                <img
                                                    src={clinician.image}
                                                    alt={`${clinician.firstName} ${clinician.lastName}`}
                                                    className="w-20 h-20 rounded-full object-cover border border-stone-100 hidden md:block"
                                                />
                                            )}
                                            <div>
                                                <h3 className="text-xl font-bold text-stone-900 mb-1">
                                                    {clinician.firstName} {clinician.lastName}
                                                </h3>
                                                <p className="text-stone-600 font-medium mb-1">
                                                    {clinician.title}
                                                </p>
                                                <p className="text-stone-500 text-sm mb-4">
                                                    📍 {clinician.city}, {clinician.state} {clinician.zipCode}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {clinician.specialties.map((specialty, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 min-w-[140px]">
                                            {(clinician.website || clinician.email) && (
                                                <a
                                                    href={clinician.website || `mailto:${clinician.email}`}
                                                    target={clinician.website ? "_blank" : undefined}
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95 text-center"
                                                >
                                                    Contact
                                                </a>
                                            )}
                                            {clinician.phone && (
                                                <p className="text-sm text-stone-500 text-center mt-1">
                                                    {clinician.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {clinician.bio && (
                                        <p className="mt-4 text-stone-600 text-sm border-t border-stone-50 pt-4">
                                            {clinician.bio}
                                        </p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-stone-50 rounded-lg border border-stone-100">
                                <p className="text-stone-500">No clinicians found matching your search.</p>
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
