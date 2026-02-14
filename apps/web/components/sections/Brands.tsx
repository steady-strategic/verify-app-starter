import React from "react";
import Image from "next/image";
import { BrandsSectionProps } from "./types";

export const Brands: React.FC<BrandsSectionProps> = ({ variant = "default", className = "" }) => {
    // Determine which image to use based on variant
    const imageSrc = variant === "research"
        ? "/assets/images/BrandsResearch/brands-research.avif"
        : "/assets/images/Brands/BrandLogos-Home2.avif";

    // Determine background color based on variant
    const bgColor = variant === "research" ? "bg-white" : "bg-[#ececec]";

    return (
        <div className={`w-full h-[226.4px] ${bgColor} flex items-center justify-center ${className}`}>
            <div className="w-full max-w-[1440px] h-full relative">
                <Image
                    src={imageSrc}
                    alt="Partner Institutions"
                    fill
                    className="object-contain px-4 md:px-0"
                    priority
                />
            </div>
        </div>
    );
};
