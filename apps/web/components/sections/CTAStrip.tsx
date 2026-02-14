import React from "react";
import Link from "next/link";
import { CTAStripSectionProps } from "./types";

export const CTAStrip: React.FC<CTAStripSectionProps> = ({
    className = "",
    cta = { text: "Read the Research", href: "/research" }
}) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto bg-white flex items-center justify-center ${className}`}>
            <div className="w-full h-[140px] flex items-start justify-center pt-0">
                <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center bg-primary-1 hover:bg-[#BA00B8] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                    <span className="text-lg leading-[1.2]">
                        {cta.text}
                    </span>
                </Link>
            </div>
        </div>
    );
};
