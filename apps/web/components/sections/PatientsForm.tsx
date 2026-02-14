"use client";

import React from "react";
import { PatientsFormSectionProps } from "./types";
import Script from "next/script";

export const PatientsForm: React.FC<PatientsFormSectionProps> = ({
    className = "",
    title = "Curious to learn more?",
    subtitle = "Sign up to stay informed and be among the first to hear when the app becomes available."
}) => {
    return (
        <div id="patients-form" className={`w-full bg-gray-50 flex flex-col items-center justify-center py-20 px-6 md:px-20 box-border scroll-mt-24 ${className}`}>
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

                {/* HubSpot Form */}
                <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm min-h-[400px]">
                    <div
                        className="hs-form-frame min-h-[580px]"
                        data-region="na2"
                        data-form-id="4a0c8e6e-b72b-4fd9-8ce7-1a8ea4de2012"
                        data-portal-id="243662289"
                    />
                </div>
            </div>
        </div>
    );
};
