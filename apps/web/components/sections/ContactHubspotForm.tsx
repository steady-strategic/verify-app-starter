"use client";

import React, { useEffect, useRef } from "react";

interface ContactHubspotFormProps {
    className?: string;
}

export const ContactHubspotForm: React.FC<ContactHubspotFormProps> = ({ className = "" }) => {
    const formContainerRef = useRef<HTMLDivElement>(null);
    const formCreatedRef = useRef(false);

    useEffect(() => {
        // Prevent duplicate form creation
        if (formCreatedRef.current) return;

        const loadHubSpotForm = () => {
            if (window.hbspt && formContainerRef.current) {
                try {
                    window.hbspt.forms.create({
                        region: "na2",
                        portalId: "243662289",
                        formId: "12898bbb-df2b-4622-87cf-cf052a0dd4ff",
                        target: "#contact-hubspot-form-container"
                    });
                    formCreatedRef.current = true;
                } catch (error) {
                    console.error("Error creating HubSpot form:", error);
                }
            }
        };

        // Check if HubSpot script is already loaded
        if (window.hbspt) {
            loadHubSpotForm();
        } else {
            // Load the HubSpot script
            const script = document.createElement("script");
            script.src = "https://js-na2.hsforms.net/forms/embed/v3.js";
            script.async = true;
            script.defer = true;

            script.onload = () => {
                // Wait a bit for hbspt to be fully initialized
                setTimeout(loadHubSpotForm, 100);
            };

            script.onerror = () => {
                console.error("Failed to load HubSpot form script");
            };

            document.body.appendChild(script);

            return () => {
                // Cleanup: remove script on unmount
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        }
    }, []);

    return (
        <div
            id="contact-hubspot-form-container"
            ref={formContainerRef}
            className={className}
        />
    );
};

// Extend Window interface for TypeScript
declare global {
    interface Window {
        hbspt: any;
    }
}
