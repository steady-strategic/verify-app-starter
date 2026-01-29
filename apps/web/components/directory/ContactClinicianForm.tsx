"use client";

import { useEffect } from "react";

interface ContactClinicianFormProps {
    onClose: () => void;
    clinicianEmail: string | null;
}

export function ContactClinicianForm({ onClose, clinicianEmail }: ContactClinicianFormProps) {
    useEffect(() => {
        const scriptSrc = "//js.hsforms.net/forms/embed/v2.js";

        const initializeForm = () => {
            // @ts-ignore
            if (window.hbspt) {
                console.log("DEBUG: hbspt found. Creating form...");
                // @ts-ignore
                window.hbspt.forms.create({
                    region: "na2",
                    portalId: "243662289",
                    formId: "54e4bb6a-b0f0-4595-9506-cc483ba0b97a",
                    target: "#hs-contact-form-container",
                    onFormReady: function ($form: any) {
                        console.log("DEBUG: onFormReady fired. Email:", clinicianEmail);

                        if (clinicianEmail) {
                            setTimeout(() => {
                                console.log("DEBUG: Timeout fired. Searching for input...");
                                const input = $form.find('input[name="work_title"]');
                                console.log("DEBUG: Input found?", input.length > 0);

                                if (input.length) {
                                    const domInput = input[0];

                                    console.log("DEBUG: Injecting value...");
                                    input.val(clinicianEmail);
                                    domInput.dispatchEvent(new Event('input', { bubbles: true }));
                                    domInput.dispatchEvent(new Event('change', { bubbles: true }));
                                    input.trigger('change');

                                    input.hide();
                                    input.closest('.hs-form-field').hide();
                                } else {
                                    console.warn("DEBUG: Input 'work_title' NOT found in form.");
                                }
                            }, 500);
                        } else {
                            console.warn("DEBUG: No clinicianEmail provided to inject.");
                        }
                    }
                });
            } else {
                console.warn("DEBUG: hbspt global not found even after load.");
            }
        };

        // Check if script already exists
        let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;

        if (!script) {
            console.log("DEBUG: Script not found, appending...");
            script = document.createElement("script");
            script.src = scriptSrc;
            script.charset = "utf-8";
            script.type = "text/javascript";
            document.body.appendChild(script);
        } else {
            console.log("DEBUG: Script already exists.");
        }

        // Wait for script to actually execute and define window.hbspt
        const interval = setInterval(() => {
            // @ts-ignore
            if (window.hbspt) {
                clearInterval(interval);
                initializeForm();
            }
        }, 100);

        return () => {
            clearInterval(interval);
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
