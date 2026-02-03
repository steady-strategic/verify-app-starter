import React from "react";

// Base section props that all sections will extend
export interface BaseSectionProps {
    variant?: string;
    className?: string;
    id?: string;
}

export interface PageBannerSectionProps extends BaseSectionProps {
    variant?: "default" | "how-it-works" | "research" | "clinicians" | "directory";
    title: string;
    subtitle?: React.ReactNode;
    description: React.ReactNode;
    backgroundImage: {
        src: string;
        alt: string;
    };
    foregroundImage?: {
        src: string;
        alt: string;
    };
}

export interface CardsSectionProps extends BaseSectionProps {
    variant?: "default" | "how-it-works" | "research" | "clinicians";
    title: React.ReactNode;
    items: {
        icon: {
            src: string;
            alt: string;
        };
        title: React.ReactNode;
        description: string;
    }[];
}


