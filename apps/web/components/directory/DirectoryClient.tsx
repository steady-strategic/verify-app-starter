"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/sections/PageBanner";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ContactClinicianForm } from "./ContactClinicianForm";

interface Clinician {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    training: string | null;
    city: string;
    state: string;
    country: string | null;
    email: string | null;
    phone: string | null;
}

interface DirectoryClientProps {
    initialClinicians: Clinician[];
}

export function DirectoryClient({ initialClinicians }: DirectoryClientProps) {
    const [scrolled, setScrolled] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Select Location");
    const [filteredClinicians, setFilteredClinicians] = useState<Clinician[]>([]); // Start empty
    const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

    // Prepare location data
    const locationOptions = (() => {
        const usStates = new Map<string, number>();
        const otherCountries = new Map<string, number>();

        initialClinicians.forEach(c => {
            const country = c.country?.trim() || "United States";
            const isUS = ["united states", "usa", "us", "u.s.", "u.s.a."].includes(country.toLowerCase());

            if (isUS) {
                const count = usStates.get(c.state) || 0;
                usStates.set(c.state, count + 1);
            } else {
                const count = otherCountries.get(country) || 0;
                otherCountries.set(country, count + 1);
            }
        });

        const sortedUSStates = Array.from(usStates.entries()).sort((a, b) => a[0].localeCompare(b[0]));
        const sortedCountries = Array.from(otherCountries.entries()).sort((a, b) => a[0].localeCompare(b[0]));

        return { usStates: sortedUSStates, otherCountries: sortedCountries };
    })();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (selectedLocation === "Select Location") {
            setFilteredClinicians([]); // Clear when no location
            return;
        }

        const [type, value] = selectedLocation.split(":");

        const filtered = initialClinicians.filter((clinician) => {
            if (type === "State") {
                const country = clinician.country?.trim() || "United States";
                const isUS = ["united states", "usa", "us", "u.s.", "u.s.a."].includes(country.toLowerCase());
                return isUS && clinician.state === value;
            } else if (type === "Country") {
                const country = clinician.country?.trim() || "United States";
                return country === value;
            }
            return true;
        });

        setFilteredClinicians(filtered);
    }, [selectedLocation, initialClinicians]);

    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900 bg-stone-50">
            <Navbar scrolled={scrolled} />

            <main className="pt-20">
                <PageBanner
                    variant="directory"
                    title="Find a Clinician"
                    description={["Looking to receive MORE therapy from a clinician near you? Select your state to begin your search. Each listed clinician has been officially trained and certified in MORE therapy by Dr. Eric Garland."]}
                    backgroundImage={{
                        src: "/assets/images/DirectoryBannerBG.avif",
                        alt: "Directory Background",
                    }}
                >
                    <div className="bg-white p-2 rounded-lg flex gap-2 w-full max-w-[75%] shadow-lg items-center">
                        <div className="flex-1 relative border border-stone-200 rounded-md">
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-full appearance-none bg-transparent px-4 py-3 pr-10 border-none focus:ring-0 text-stone-700 text-base cursor-pointer outline-none"
                            >
                                <option value="Select Location">Select Location</option>

                                {locationOptions.usStates.length > 0 && (
                                    <optgroup label="United States" className="font-bold text-stone-900">
                                        {locationOptions.usStates.map(([state, count]) => (
                                            <option key={`State:${state}`} value={`State:${state}`} className="font-normal">
                                                {state} ({count})
                                            </option>
                                        ))}
                                    </optgroup>
                                )}

                                {locationOptions.otherCountries.length > 0 && (
                                    <>
                                        {locationOptions.otherCountries.map(([country, count]) => (
                                            <option key={`Country:${country}`} value={`Country:${country}`} className="font-bold text-stone-900">
                                                {country} ({count})
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <button className="bg-[#D926D8] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#c022bf] transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                    </div>
                </PageBanner>

                <div className="container mx-auto px-6 max-w-6xl mt-12">


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
                                        className={`bg-white border border-stone-100 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden group w-full max-w-[592px] ${expandedCardId === clinician.id ? 'h-[509px] flex flex-col' : 'min-h-[160px] flex flex-col'
                                            }`}
                                    >
                                        {expandedCardId === clinician.id ? (
                                            <ContactClinicianForm
                                                onClose={() => setExpandedCardId(null)}
                                                clinicianEmail={clinician.email}
                                            />
                                        ) : (
                                            <div className="p-6 flex-1 flex flex-col min-w-0">
                                                <div className="mb-3">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-primary-1 transition-colors truncate pr-2">
                                                            {clinician.firstName} {clinician.lastName}
                                                        </h3>
                                                        <div className="flex flex-col items-end gap-4">
                                                            <span className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shrink-0">
                                                                {clinician.title}
                                                            </span>
                                                            {clinician.training && (
                                                                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shrink-0">
                                                                    {clinician.training}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-medium text-stone-500 flex items-center truncate">
                                                        <span className="mr-1">📍</span>
                                                        {clinician.city}, {clinician.state}
                                                        {clinician.country && <span className="text-stone-400 ml-1">({clinician.country})</span>}
                                                    </p>
                                                </div>

                                                <div className="mt-auto pt-4 border-t border-stone-100 flex justify-center">
                                                    <button
                                                        onClick={() => setExpandedCardId(clinician.id)}
                                                        className="text-stone-900 hover:text-amber-700 font-semibold text-sm flex items-center group/link transition-all focus:outline-none border border-stone-200 px-6 py-2 rounded-full hover:bg-stone-50"
                                                    >
                                                        Contact
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
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

                    <div className="mt-12 p-8 text-center">
                        <h3 className="text-2xl font-bold text-stone-900 mb-4">
                            Are You a Certified MORE Clinician?
                        </h3>
                        <p className="text-stone-600 mb-6">
                            Join our directory to connect with patients seeking MORE therapy.
                        </p>
                        <Link href="/contact" className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
