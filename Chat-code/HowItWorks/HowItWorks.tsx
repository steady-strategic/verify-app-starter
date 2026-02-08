// components/sections/HowItWorks.tsx
import React from "react";
import type { HowItWorksSectionProps } from "./types";
import { HowItWorksDesktop } from "./HowItWorks.desktop";
import { HowItWorksMobile } from "./HowItWorks.mobile";

export const HowItWorks: React.FC<HowItWorksSectionProps> = ({
    className = "",
    ...props
}) => {
    return (
        <div className={className}>
            <div className="hidden md:block">
                <HowItWorksDesktop {...props} />
            </div>

            <div className="md:hidden">
                <HowItWorksMobile {...props} />
            </div>
        </div>
    );
};