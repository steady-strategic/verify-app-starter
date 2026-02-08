"use client";

import React from "react";
import { PatientsFormSectionProps } from "./types";

export const PatientsForm: React.FC<PatientsFormSectionProps> = ({
    className = "",
    title = "Curious to learn more?",
    subtitle = "Inquire to stay informed and be among the first to hear when the app becomes available."
}) => {
    return (
        <div className={`w-full bg-gray-50 flex flex-col items-center justify-center py-20 px-6 md:px-20 box-border ${className}`}>
            <div className="w-full max-w-[856px] space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 tracking-[-0.02em]">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        {subtitle}
                    </p>
                </div>

                {/* Form */}
                <form className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm space-y-8">
                    {/* Row 1: Names */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="space-y-2">
                            <label
                                htmlFor="firstName"
                                className="block text-gray-900 font-medium text-[16px]"
                            >
                                First name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                required
                                placeholder="Enter your first name"
                                className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="lastName"
                                className="block text-gray-900 font-medium text-[16px]"
                            >
                                Last name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                required
                                placeholder="Enter your last name"
                                className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Row 2: Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-gray-900 font-medium text-[16px]"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="phone"
                                className="block text-gray-900 font-medium text-[16px]"
                            >
                                Phone number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-2">
                        <label
                            htmlFor="message"
                            className="block text-gray-900 font-medium text-[16px]"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={6}
                            placeholder="Tell us how we can help..."
                            className="block w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-primary-1 hover:brightness-110 active:scale-[0.98] text-white font-bold text-[16px] h-[56px] px-12 rounded-xl transition-all shadow-lg shadow-primary-1/20 flex items-center justify-center"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
