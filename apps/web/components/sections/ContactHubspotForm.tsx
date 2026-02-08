"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

interface ContactHubspotFormProps {
    className?: string;
}

export const ContactHubspotForm: React.FC<ContactHubspotFormProps> = ({ className = "" }) => {
    const [scriptLoaded, setScriptLoaded] = React.useState(false);

    return (
        <>
            <Script
                src="https://js-na2.hsforms.net/forms/embed/243662289.js"
                strategy="lazyOnload"
                onLoad={() => {
                    setScriptLoaded(true);
                }}
                onError={(e) => {
                    console.error("HubSpot script failed to load:", e);
                }}
            />
            <div
                id="contact-hubspot-form-container"
                className={`hs-form-frame ${className}`}
                data-region="na2"
                data-form-id="12898bbb-df2b-4622-87cf-cf052a0dd4ff"
                data-portal-id="243662289"
            />
        </>
    );
};
