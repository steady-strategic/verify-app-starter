"use client";

import React from "react";

interface ContactFormProps {
    className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
    return (
        <form className={`space-y-8 ${className}`}>
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                    <label
                        htmlFor="firstName"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        First name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        required
                        className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="lastName"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        Last name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        required
                        className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                    />
                </div>
            </div>

            {/* Row 2: Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="phone"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        Phone number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                    />
                </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="block text-gray-900 font-medium text-[18px]"
                >
                    Your message
                </label>
                <textarea
                    id="message"
                    required
                    rows={6}
                    className="block w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all resize-none"
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
                <button
                    type="submit"
                    className="bg-primary-1 hover:brightness-110 active:scale-[0.98] text-white font-bold text-[16px] h-[56px] w-[156px] rounded-2xl transition-all shadow-lg shadow-primary-1/20 flex items-center justify-center"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};
