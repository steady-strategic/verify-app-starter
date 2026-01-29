"use client";

import { useEffect, useRef } from "react";

interface ContactClinicianFormProps {
    onClose: () => void;
}

export function ContactClinicianForm({ onClose }: ContactClinicianFormProps) {
    useEffect(() => {
        // Create script element
        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/243662289.js";
        script.defer = true;

        // Append to document body
        document.body.appendChild(script);

        // Cleanup: Remove script when component unmounts to ensure it re-runs/re-initializes if mounted again
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

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
                <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-stone-900">Contact Clinician</h3>
                    <p className="text-xs text-stone-500">Fill out the form below to get in touch</p>
                </div>

                <div
                    className="hs-form-frame w-full"
                    data-region="na2"
                    data-form-id="54e4bb6a-b0f0-4595-9506-cc483ba0b97a"
                    data-portal-id="243662289"
                ></div>
            </div>
        </div>
    );
}
