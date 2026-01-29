"use client";

import { useEffect, useRef } from "react";

interface ContactClinicianFormProps {
    onClose: () => void;
    clinicianEmail?: string | null;
}

export function ContactClinicianForm({ onClose, clinicianEmail }: ContactClinicianFormProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptSrc = "https://js-na2.hsforms.net/forms/embed/243662289.js";
        let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;

        const createForm = () => {
            if ((window as any).hbspt && containerRef.current) {
                // Clear any existing form
                containerRef.current.innerHTML = "";

                (window as any).hbspt.forms.create({
                    region: "na2",
                    portalId: "243662289",
                    formId: "54e4bb6a-b0f0-4595-9506-cc483ba0b97a",
                    target: containerRef.current,
                    onFormReady: ($form: any) => {
                        if (clinicianEmail) {
                            // Try to find the field by likely internal names
                            // HubSpot usually converts "Clinician Email" to "clinician_email"
                            const input = $form.find('input[name="clinician_email"]');
                            if (input.length) {
                                input.val(clinicianEmail).change();
                            } else {
                                console.warn("Could not find 'clinician_email' field in HubSpot form");
                            }
                        }
                    }
                });
            }
        };

        if (!script) {
            script = document.createElement("script");
            script.src = scriptSrc;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = createForm;
        } else {
            if ((window as any).hbspt) {
                createForm();
            } else {
                script.addEventListener('load', createForm);
            }
        }

        return () => {
            if (script) {
                script.removeEventListener('load', createForm);
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

                <div ref={containerRef} className="w-full min-h-[400px]"></div>
            </div>
        </div>
    );
}
