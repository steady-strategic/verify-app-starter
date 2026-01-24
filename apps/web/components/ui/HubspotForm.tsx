"use client";

import React, { useEffect, useRef } from 'react';

interface HubspotFormProps {
    portalId?: string;
    formId: string;
    region?: string;
    target?: string;
}

declare global {
    interface Window {
        hbspt: any;
    }
}

export const HubspotForm: React.FC<HubspotFormProps> = ({
    portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
    formId,
    region = "na2",
    target
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptId = 'hubspot-form-script';

        const createForm = () => {
            if (window.hbspt && containerRef.current) {
                // Clear container to prevent duplicates
                containerRef.current.innerHTML = '';

                window.hbspt.forms.create({
                    region: region,
                    portalId: portalId,
                    formId: formId,
                    target: containerRef.current,
                });
            }
        };

        // Check if script already exists
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = "//js.hsforms.net/forms/embed/v2.js";
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.defer = true;

            script.onload = () => {
                createForm();
            };

            document.body.appendChild(script);
        } else {
            // Script exists, if hbspt is ready, create form
            if (window.hbspt) {
                createForm();
            } else {
                // Script exists but maybe not fully loaded (rare race condition), 
                // or previously loaded but hbspt not ready?
                // Append a listener just in case
                script.addEventListener('load', createForm);
                // Cleanup listener
                return () => script.removeEventListener('load', createForm);
            }
        }
    }, [portalId, formId, region]);

    return (
        <div ref={containerRef} className="hubspot-form-container w-full" />
    );
};
