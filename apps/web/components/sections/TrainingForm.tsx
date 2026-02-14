"use client";

import React from "react";
import Script from "next/script";

interface TrainingFormProps {
    className?: string;
}

export const TrainingForm: React.FC<TrainingFormProps> = ({ className = "" }) => {
    return (
        <>
            <div
                className={`hs-form-frame min-h-[400px] ${className}`}
                data-region="na2"
                data-form-id="8c6f1a6a-6b5b-4c76-96b6-a73f91dbd600"
                data-portal-id="243662289"
            />
        </>
    );
};
