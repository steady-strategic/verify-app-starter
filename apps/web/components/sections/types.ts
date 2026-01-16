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
    };
    cards: StatCard[];  // STRICTLY 4 cards for "default", 6 cards for "Cards2x3"
    cta?: {
        label: string;
        href: string; // Internal path for Next.js Link
    };
}
