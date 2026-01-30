import React from "react";
// Base section props that all sections will extend
export interface BaseSectionProps {
    variant?: string;
    className?: string;
    id?: string;
}

// Stat card content schema
export interface StatCard {
    title: string;
    stats: string[];  // Array of stat lines
}

// Cards section props
export interface CardsSectionProps extends BaseSectionProps {
    variant?: "default" | "Cards2x3";
    headline: {
        text: string;
        highlight?: string;  // Word to highlight in accent color
        subtitle?: string;   // Optional text below the headline
    };
    cards: StatCard[];  // STRICTLY 4 cards for "default", 6 cards for "Cards2x3"
    cta?: {
        label: string;
        href: string; // Internal path for Next.js Link
    };
}

// Feature item for Content section
export interface ContentFeature {
    text: string;
}

// Content section props
export interface ContentSectionProps extends BaseSectionProps {
    variant?: "default" | "swap" | "Content-HowItWorks" | "Content-forClinicians";
    title: string;
    subtitle: string;
    features: ContentFeature[];  // Array of feature items with checkmark icons
    image: {
        src: string;
        alt: string;
    };
}

// PageBanner section props
export interface PageBannerSectionProps extends BaseSectionProps {
    variant?: "default" | "more-institute" | "forClinicians" | "Research" | "researchBrain" | "directory";
    subtitle?: string; // Optional secondary heading for forClinicians and Research variants
    title: string;
    description: string[];  // Array of description paragraphs
    backgroundImage: {
        src: string;
        alt: string;
    };
    foregroundImage?: {
        src: string;
        alt: string;
    };
    formId?: string;
}

// Video section props
export interface VideoSectionProps extends BaseSectionProps {
    variant?: "default";
    title: string;
    description: string;
    videoThumbnail: {
        src: string;
        alt: string;
    };
    videoUrl?: string;  // Optional video URL for playback
}

// Card item for HowItWorks section
export interface HowItWorksCard {
    title: string;
    iconSrc: string;  // Path to icon SVG
    iconColor: string;  // Background color for icon circle
}

// HowItWorks section props
export interface HowItWorksSectionProps extends BaseSectionProps {
    variant?: "default" | "r1" | "home";
    sectionHeader?: string | React.ReactNode;
    title: string | React.ReactNode;
    description?: string; // Optional text below title
    subtitle: string;  // Text below lotus icon (e.g., "Mindfulness")
    steps: string[];  // Array of step labels (e.g., ["Step 1", "Step 2", "Step 3"])
    cards: HowItWorksCard[];  // Array of 3 cards with icons
    research: string;  // Research quote text
}

// DownloadApp section props
export interface DownloadAppSectionProps extends BaseSectionProps {
    variant?: "default" | "dark";
    title: string;
    description: string;
    features: string[];
    downloadLabel: string;
    links: {
        appStore: string;
        googlePlay: string;
    };
    images?: {
        phoneMockup?: {
            src: string;
            alt: string;
        };
        soundWave?: {
            src: string;
            alt: string;
        };
    };
}

// TextHowItWorks content item
export interface TextHowItWorksFeature {
    title: string;
    description: string;
    iconSrc: string;
    iconBgColor: string; // Hex color for the icon background
}

// TextHowItWorks section props
export interface TextHowItWorksSectionProps extends BaseSectionProps {
    variant?: "default" | "clinicians" | "r1";
    header: string | React.ReactNode; // Main heading text
    features: TextHowItWorksFeature[]; // Array of 3 or 6 features
}



// Blog Card item
export interface BlogCard {
    tag: string;
    tagColor: string; // Hex styling for the badge background
    headerGradient: string; // CSS linear-gradient string
    title: string;
    description: string;
    author: {
        name: string;
        avatar: string;
    };
    publishDate: string;
    readTime: string;
}

// BlogHero section props
export interface BlogHeroSectionProps extends BaseSectionProps {
    variant?: "default";
    header: {
        title: string;
        description: string;
    };
    charts: {
        src: string;
        alt: string;
    }[]; // Array of 3 chart images
    cards: BlogCard[]; // Array of 3 blog cards
}

// Blog Feed Post item
export interface BlogFeedPost {
    id: string;
    title: string;
    description: string;
    cta: {
        label: string;
        href: string;
        iconSrc: string; // Arrow icon SVG path
    };
    imageMockup?: {
        src: string; // Optional image overlay if design evolves, currently just a dark box
        alt?: string;
    };
}

// BlogFeed section props
export interface BlogFeedSectionProps extends BaseSectionProps {
    variant?: "default";
    posts: BlogFeedPost[];
}

// ContactHero section props
export interface ContactHeroSectionProps extends BaseSectionProps {
    variant?: "default";
    title: string;
    description: string;
    backgroundImage: {
        src: string;
        alt: string;
    };
    form?: {
        firstNameLabel: string;
        lastNameLabel: string;
        emailLabel: string;
        phoneLabel: string;
        messageLabel: string;
        buttonText: string;
    };
    formId?: string;
}

// FAQ Item
export interface FAQItem {
    id: string;
    question: string;
    answer: string; // HTML string allowed
}

// FAQ section props
export interface FAQSectionProps extends BaseSectionProps {
    variant?: "default";
    title: string;
    items: FAQItem[];
}


// HomeResearch content item
export interface HomeResearchFeature {
    title: string;
    text?: string;
    stats?: {
        value: string;
        label: string;
    }[];
}

// HomeResearch section props
export interface HomeResearchSectionProps extends BaseSectionProps {
    variant?: "default";
    heading: string;
    features: HomeResearchFeature[];
    cta: {
        text: string;
        href: string;
    };
}

// ContentDblStack item
export interface ContentDblStackItem {
    heading: string;
    description: string;
    features: string[];
    image: {
        src: string;
        alt: string;
    };
    cta?: {
        text: string;
        href: string;
    };
    reverse?: boolean;
}

// ContentDblStack section props
export interface ContentDblStackSectionProps extends BaseSectionProps {
    items: ContentDblStackItem[];
}

// HomeAbout section props
export interface HomeAboutSectionProps extends BaseSectionProps {
    variant?: "default";
    title: string | React.ReactNode;
    subtitle: string;
    description: string;
    profileImage: {
        src: string;
        alt: string;
    };
    socialLinks: {
        linkedin?: string;
        x?: string;
    };
}

// Clinician data structure
export interface ClinicianData {
    name: string;
    phone: string;
    trainingLevel: string;
    city: string;
    state: string;
    contactUrl: string; // URL for the Contact button
}

// ClinicianCard section props
export interface ClinicianCardSectionProps extends BaseSectionProps {
    variant?: "default";
    clinician: ClinicianData;
}
