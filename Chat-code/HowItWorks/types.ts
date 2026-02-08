// components/sections/types.ts (add/update these)
export interface HowItWorksStep {
    label: string;
    title: string;
    icon: string;
}

export interface HowItWorksSectionProps extends BaseSectionProps {
    heading?: string;
    footerText?: string;

    centerTitle?: string;
    centerIconSrc?: string;

    curveBackgroundSrc?: string;

    steps?: HowItWorksStep[];
}