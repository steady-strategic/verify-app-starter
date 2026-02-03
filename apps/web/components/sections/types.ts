import React from "react";

// Base section props that all sections will extend
export interface BaseSectionProps {
    variant?: string;
    className?: string;
    id?: string;
}

export interface PageBannerSectionProps extends BaseSectionProps {
    variant?: "default" | "how-it-works" | "research" | "clinicians" | "directory";
    title: React.ReactNode;
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


export interface ContentSectionProps extends BaseSectionProps {
    variant?: "default" | "swap" | "split" | "simple";
    title: React.ReactNode;
    subtitle?: string;
    items: string[];
    image: {
        src: string;
        alt: string;
    };
    cta?: {
        text: string;
        href: string;
    }
}

export interface KnowMoreSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    subtitle: string;
    cta: {
        text: string;
        href: string;
    };
    backgroundImage: {
        src: string;
        alt: string;
    };
}
