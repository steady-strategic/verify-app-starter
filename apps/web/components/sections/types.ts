// Base section props that all sections will extend
export interface BaseSectionProps {
    variant?: "default";
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
    headline: {
        text: string;
        highlight?: string;  // Word to highlight in accent color
    };
    cards: StatCard[];  // STRICTLY 4 cards for "default" variant (2x2 grid)
    cta?: {
        label: string;
        href: string; // Internal path for Next.js Link
    };
}
