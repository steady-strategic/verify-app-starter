"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

interface ContactHubspotFormProps {
    className?: string;
}

export const ContactHubspotForm: React.FC<ContactHubspotFormProps> = ({ className = "" }) => {
    return (
        <>
            <div
                id="contact-hubspot-form-container"
                className={`hs-form-frame min-h-[600px] ${className}`}
                data-region="na2"
                data-form-id="12898bbb-df2b-4622-87cf-cf052a0dd4ff"
                data-portal-id="243662289"
            />
        </>
    );
};
