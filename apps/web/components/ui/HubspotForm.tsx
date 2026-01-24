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
    // Generate a unique ID for this form instance if one isn't provided via target
    // We use a stable ID based on formId to prevent hydration mismatches if possible, 
    // or just a simple string if uniqueness across same-page instances is needed.
    const containerId = target ? target.replace('#', '') : `hs-form-${formId}`;

    useEffect(() => {
        const scriptId = 'hubspot-form-script';

        const createForm = () => {
            // Check if element exists by ID to be sure
            const container = document.getElementById(containerId);

            if (window.hbspt && container) {
                // Clear container specific content safely
                container.innerHTML = '';

                window.hbspt.forms.create({
                    region: region,
                    portalId: portalId,
                    formId: formId,
                    target: `#${containerId}`,
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
            document.body.appendChild(script);
        }

        // If hubspot is already ready, create immediately
        if (window.hbspt) {
            createForm();
        } else {
            // Otherwise wait for load
            script.addEventListener('load', createForm);
        }

        // Cleanup: remove listener to prevent duplicated calls on unmount/remount
        return () => {
            if (script) {
                script.removeEventListener('load', createForm);
            }
        };
    }, [portalId, formId, region, containerId]);

    return (
        <div id={containerId} className="hubspot-form-container w-full" />
    );
};
