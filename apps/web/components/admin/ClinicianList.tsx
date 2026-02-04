"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
// We define a local interface if Prisma types aren't fully generated/available in context yet, 
// but ideally we import { Clinician } from "@prisma/client"
interface Clinician {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    city: string;
    state: string;
    country?: string | null;
}

interface ClinicianListProps {
    clinicians: any[]; // Using any to avoid strict type issues if Prisma generation lags, but casting to Clinician inside
}

export function ClinicianList({ clinicians }: ClinicianListProps) {
    const [selectedLocation, setSelectedLocation] = useState("Select Location");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 1. Calculate stats
    const stats = useMemo(() => {
        const usStates: Record<string, number> = {};
        const otherCountries: Record<string, number> = {};

        clinicians.forEach((c) => {
            const country = c.country ? c.country.trim() : "";
            // Normalize US check
            const isUS = ["united states", "usa", "us", "u.s.a.", "u.s."].includes(country.toLowerCase());

            if (isUS) {
                const state = c.state || "Unknown State";
                usStates[state] = (usStates[state] || 0) + 1;
            } else if (country) {
                otherCountries[country] = (otherCountries[country] || 0) + 1;
            }
        });

        // Sort keys
        const sortedStates = Object.keys(usStates).sort();
        const sortedCountries = Object.keys(otherCountries).sort();

        return { usStates, otherCountries, sortedStates, sortedCountries };
    }, [clinicians]);

    // 2. Filter logic
    const filtered = useMemo(() => {
        if (selectedLocation === "Select Location") return clinicians;

        return clinicians.filter((c) => {
            const country = c.country ? c.country.trim() : "";
            const isUS = ["united states", "usa", "us", "u.s.a.", "u.s."].includes(country.toLowerCase());

            // If selected is a US state (check if it exists in our list of states)
            if (stats.usStates[selectedLocation]) {
                return isUS && c.state === selectedLocation;
            }

            // If selected is a Country
            return country === selectedLocation;
        });
    }, [clinicians, selectedLocation, stats]);

    const handleSelect = (val: string) => {
        setSelectedLocation(val);
        setIsDropdownOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 z-20 relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-stone-50 rounded-xl py-3 px-4 text-left flex items-center justify-between hover:bg-stone-100 transition-colors duration-200 outline-none focus:ring-2 focus:ring-amber-200"
                >
                    <span className={`text-sm ${selectedLocation === 'Select Location' ? 'text-stone-400' : 'text-stone-900 font-medium'}`}>
                        {selectedLocation}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-stone-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-stone-100 max-h-80 overflow-y-auto z-50 py-2">
                        {/* Reset Option */}
                        <button
                            onClick={() => handleSelect("Select Location")}
                            className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-500 text-sm"
                        >
                            Show All
                        </button>

                        {/* US Section */}
                        {(stats.sortedStates.length > 0) && (
                            <div className="mt-2">
                                <div className="px-4 py-2 text-stone-900 font-bold text-sm bg-stone-50/50">
                                    United States
                                </div>
                                {stats.sortedStates.map(state => (
                                    <button
                                        key={state}
                                        onClick={() => handleSelect(state)}
                                        className="w-full text-left px-4 pl-8 py-2 hover:bg-amber-50 text-stone-600 text-sm flex items-center justify-between group"
                                    >
                                        <span>{state}</span>
                                        <span className="text-stone-400 text-xs bg-stone-100 px-2 py-0.5 rounded-full group-hover:bg-amber-100 group-hover:text-amber-700">
                                            {stats.usStates[state]}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Other Countries */}
                        {stats.sortedCountries.map(country => (
                            <button
                                key={country}
                                onClick={() => handleSelect(country)}
                                className="w-full text-left px-4 py-2 hover:bg-amber-50 text-stone-900 font-bold text-sm mt-1 flex items-center justify-between group"
                            >
                                <span>{country}</span>
                                <span className="text-stone-400 font-normal text-xs bg-stone-100 px-2 py-0.5 rounded-full group-hover:bg-amber-100 group-hover:text-amber-700">
                                    {stats.otherCountries[country]}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                            <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Name</th>
                            <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Location</th>
                            <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Title</th>
                            <th className="text-right px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((clinician: Clinician) => (
                            <tr key={clinician.id} className="border-b border-stone-100 hover:bg-stone-50">
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-stone-900">
                                        {clinician.firstName} {clinician.lastName}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-stone-600">
                                    {clinician.city}, {clinician.state}
                                    {clinician.country && <span className="text-stone-400 ml-1">({clinician.country})</span>}
                                </td>
                                <td className="px-6 py-4 text-sm text-stone-600">
                                    {clinician.title}
                                </td>
                                <td className="px-6 py-4 text-right flex items-center justify-end space-x-4">
                                    <Link
                                        href={`/admin/clinician-directory/${clinician.id}/edit`}
                                        className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={async () => {
                                            if (confirm("Are you sure you want to delete this clinician?")) {
                                                await fetch(`/api/admin/clinicians/${clinician.id}`, { method: "DELETE" });
                                                window.location.reload();
                                            }
                                        }}
                                        className="text-rose-600 hover:text-rose-700 font-medium text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-stone-500">
                                    No clinicians found in "{selectedLocation}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
