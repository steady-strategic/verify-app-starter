"use client";

import React from "react";

interface ContactClinicianFormProps {
    onClose: () => void;
    clinicianEmail: string | null;
}

export function ContactClinicianForm({ onClose, clinicianEmail }: ContactClinicianFormProps) {
    return (
        <div className="relative w-full h-full bg-white p-6 overflow-y-auto">
            {/* Close Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors z-10 rounded-full hover:bg-stone-100"
                aria-label="Close form"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Form Container */}
            <div className="w-full h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-stone-900">Contact Clinician</h3>
                    <p className="text-sm text-stone-500 mt-1">Fill out the form below to get in touch</p>
                </div>

                <form className="space-y-4">
                    {/* Row 1: Names */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label
                                htmlFor="firstName"
                                className="block text-stone-900 font-medium text-sm"
                            >
                                First name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                required
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="lastName"
                                className="block text-stone-900 font-medium text-sm"
                            >
                                Last name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                required
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Row 2: Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label
                                htmlFor="email"
                                className="block text-stone-900 font-medium text-sm"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="phone"
                                className="block text-stone-900 font-medium text-sm"
                            >
                                Phone number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-1">
                        <label
                            htmlFor="message"
                            className="block text-stone-900 font-medium text-sm"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="block w-full p-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none text-sm"
                        />
                    </div>

                    {/* Hidden field for clinician email */}
                    {clinicianEmail && (
                        <input type="hidden" name="clinician_email" value={clinicianEmail} />
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center pt-2">
                        <button
                            type="submit"
                            className="bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white font-semibold text-sm h-[44px] px-8 rounded-full transition-all shadow-sm flex items-center justify-center"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
