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
    variant?: "default" | "more-institute" | "forClinicians" | "Research";
    subtitle?: string; // Optional secondary heading for forClinicians and Research variants
    title: string;
    description: string[];  // Array of description paragraphs
    backgroundImage: {
        src: string;
        alt: string;
    };
    foregroundImage: {
        src: string;
        alt: string;
    };
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
    variant?: "default";
    title: string;
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
    variant?: "default" | "clinicians";
    header: string; // Main heading text
    features: TextHowItWorksFeature[]; // Array of 3 or 6 features
}


