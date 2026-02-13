"use client";

import React, { useState, FormEvent } from "react";

interface ContactClinicianFormProps {
    onClose: () => void;
    clinicianEmail: string | null;
}

export function ContactClinicianForm({ onClose, clinicianEmail }: ContactClinicianFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        const form = e.currentTarget; // Store reference before async
        const formData = new FormData(form);

        try {
            const response = await fetch('/api/contact-clinician', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clinicianEmail,
                    firstName: formData.get('firstName') as string,
                    lastName: formData.get('lastName') as string,
                    email: formData.get('email') as string,
                    phone: formData.get('phone') as string || null,

                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitStatus('success');
            // Reset form using stored reference
            form.reset();

            // Close modal after 2 seconds
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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

                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-sm font-medium">✓ Message sent successfully!</p>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 text-sm font-medium">✗ {errorMessage}</p>
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
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
                                name="firstName"
                                type="text"
                                required
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all text-sm"
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
                                name="lastName"
                                type="text"
                                required
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all text-sm"
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
                                name="email"
                                type="email"
                                required
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all text-sm"
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
                                name="phone"
                                type="tel"
                                className="block w-full h-[44px] px-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Row 3: Message */}


                    {/* Hidden field for clinician email */}
                    {clinicianEmail && (
                        <input type="hidden" name="clinician_email" value={clinicianEmail} />
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary-1 hover:bg-[#BA00B8] active:scale-[0.98] text-white font-semibold text-sm h-[44px] px-8 rounded-lg transition-all shadow-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending Request...' : 'Send Request'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
