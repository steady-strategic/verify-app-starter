"use client";

import React, { useEffect, useRef } from "react";

interface ContactHubspotFormProps {
    className?: string;
}

export const ContactHubspotForm: React.FC<ContactHubspotFormProps> = ({ className = "" }) => {
    const formContainerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        // Only load the script once
        if (scriptLoadedRef.current) return;

        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/243662289.js";
        script.defer = true;
        script.async = true;

        script.onload = () => {
            scriptLoadedRef.current = true;

            // Create the form after script loads
            if (window.hbspt && formContainerRef.current) {
                window.hbspt.forms.create({
                    region: "na2",
                    portalId: "243662289",
                    formId: "12898bbb-df2b-4622-87cf-cf052a0dd4ff",
                    target: "#contact-hubspot-form-container"
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
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
