"use client";

import { useEffect } from "react";

interface ContactClinicianFormProps {
    onClose: () => void;
    clinicianEmail: string | null;
}

export function ContactClinicianForm({ onClose, clinicianEmail }: ContactClinicianFormProps) {
    useEffect(() => {
        // Create script element
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";

        script.onload = () => {
            // @ts-ignore - window.hbspt is not typed
            if (window.hbspt) {
                // @ts-ignore
                window.hbspt.forms.create({
                    region: "na2",
                    portalId: "243662289",
                    formId: "54e4bb6a-b0f0-4595-9506-cc483ba0b97a",
                    target: "#hs-contact-form-container",
                    onFormReady: function ($form: any) {
                        if (clinicianEmail) {
                            const input = $form.find('input[name="Clinician Email"]');
                            if (input.length) {
                                input.val(clinicianEmail).trigger("change").hide();
                                // Also hide the label container if possible to make it cleaner
                                input.closest('.hs-form-field').hide();
                            }
                        }
                    }
                });
            }
        };

        // Append to document body
        document.body.appendChild(script);

        // Cleanup: Remove script when component unmounts
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [clinicianEmail]);

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

                <div id="hs-contact-form-container" className="w-full"></div>
            </div>
        </div>
    );
}
