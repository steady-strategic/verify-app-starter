import React from "react";

// Base section props that all sections will extend
export interface BaseSectionProps {
    variant?: string;
    className?: string;
    id?: string;
}

export interface PageBannerSectionProps extends BaseSectionProps {
    variant?: "default" | "how-it-works" | "research" | "clinicians" | "directory" | "training" | "patients";
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
    children?: React.ReactNode;
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
    cta: {
        text: string;
        href: string;
    }
}

export interface Cards2x3SectionProps extends BaseSectionProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    items: {
        title: string;
        body: React.ReactNode;
    }[];
    cta?: {
        text: string;
        href: string;
    };
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

export interface HeroSectionProps extends BaseSectionProps {
}

export interface BrandsSectionProps extends BaseSectionProps {
}

export interface ResearchHomeSectionProps extends BaseSectionProps {
}

export interface AboutHomeSectionProps extends BaseSectionProps { }

export interface ContentHomeSectionProps extends BaseSectionProps { }

export interface TestimonialsSectionProps extends BaseSectionProps { }

export interface VideoSectionProps extends BaseSectionProps {
    variant?: "default" | "patients" | "clinicians";
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    backgroundImage?: {
        src: string;
        alt: string;
    };
    videoPreviewImage?: {
        src: string;
        alt: string;
    };
}

// HowItWorks Step definition
export interface HowItWorksStep {
    label: string;
    title: string;
    icon: string;
}

export interface HowItWorksSectionProps extends BaseSectionProps {
    variant?: "default" | "home";
    heading?: string;
    subtitle?: string;
    footerText?: string;
    centerTitle?: string;
    centerIconSrc?: string;
    curveBackgroundSrc?: string;
    steps?: HowItWorksStep[];
}

export interface ContentTrainingSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    body: React.ReactNode;
    image: {
        src: string;
        alt: string;
    };
    cta: {
        text: string;
        href: string;
    };
}

export interface Cards3x2SectionProps extends BaseSectionProps {
    title: React.ReactNode;
    items: {
        title: string;
        body: string;
    }[];
}

export interface KnowMoreTallSectionProps extends BaseSectionProps {
    variant?: "default" | "patients";
    title: React.ReactNode;
    cta: {
        text: string;
        href: string;
    };
    backgroundImage: {
        src: string;
        alt: string;
    };
}

export interface ProviderListSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    items: {
        name: string;
        location: string;
    }[];
    cta: {
        text: string;
        href: string;
    };
}

export interface TextCliniciansSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    body: React.ReactNode;
}

export interface ProfileAboutSectionProps extends BaseSectionProps {
    image: {
        src: string;
        alt: string;
    };
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    body: React.ReactNode;
    cta?: {
        text: string;
        href: string;
    };
}

export interface TextAboutSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    body: React.ReactNode;
}

export interface VideoAboutSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    backgroundImage: {
        src: string;
        alt: string;
    };
    videoPreviewImage: {
        src: string;
        alt: string;
    };
    // Assuming simple play functionality or just visual for now
}

export interface FaqAccordionSectionProps extends BaseSectionProps {
    title: string;
    items: {
        question: string;
        answer: React.ReactNode;
    }[];
}

export interface BlogFeedBannerSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    backgroundImage: {
        src: string;
        alt: string;
    };
}

export interface VideoCliniciansSectionProps extends BaseSectionProps {
    className?: string;
}

export interface BlogHomeSectionProps extends BaseSectionProps {
    title: string;
    items: {
        image: {
            src: string;
            alt: string;
        };
        category: string;
        title: string;
        description: string;
        href: string;
    }[];
}

export interface AppSectionProps extends BaseSectionProps {
    variant?: "default" | "patients";
}

export interface PatientsTextSectionProps extends BaseSectionProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

export interface PatientsFormSectionProps extends BaseSectionProps {
    title?: string;
    subtitle?: string;
}

export interface VideoModSectionProps extends BaseSectionProps {
    variant?: "default";
    title: React.ReactNode;
    description: React.ReactNode;
    videoThumbnail: {
        src: string;
        alt: string;
    };
    backgroundImage: {
        src: string;
        alt: string;
    };
    videoUrl?: string;
}

export interface AppBannerSectionProps extends BaseSectionProps {
    variant?: "default";
    title: React.ReactNode;
    subtitle?: string;
    description: string;
    features: string[];
    ctaText?: string;
    appStoreLink?: string;
    playStoreLink?: string;
    backgroundImage: {
        src: string;
        alt: string;
    };
    phoneImage: {
        src: string;
        alt: string;
    };
}
