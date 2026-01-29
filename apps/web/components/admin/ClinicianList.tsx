"use client";

import { useState } from "react";
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

}

interface ClinicianListProps {
    clinicians: any[]; // Using any to avoid strict type issues if Prisma generation lags, but casting to Clinician inside
}

export function ClinicianList({ clinicians }: ClinicianListProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = clinicians.filter((c: Clinician) => {
        const term = searchTerm.toLowerCase();
        return (
            c.firstName.toLowerCase().includes(term) ||
            c.lastName.toLowerCase().includes(term) ||
            c.state.toLowerCase().includes(term) ||
            c.city.toLowerCase().includes(term)
        );
    });

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
                <input
                    type="text"
                    placeholder="Search by name, city, or state..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-stone-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                />
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
                                    No clinicians found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
