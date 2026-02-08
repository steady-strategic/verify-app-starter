import React from "react";
import Image from "next/image";
import { BrandsSectionProps } from "./types";

export const Brands: React.FC<BrandsSectionProps> = ({ variant = "default", className = "" }) => {
    // Research variant still uses individual logos
    const researchImages = [
        { src: "/assets/images/BrandsResearch/jama_psych 1.png", width: 200, height: 31, className: "w-[200px] opacity-57 grayscale hover:grayscale-0 transition-all duration-300" },
        { src: "/assets/images/BrandsResearch/uOQVGEqX_400x400 1.png", width: 110, height: 110, className: "w-[110px] opacity-48 grayscale hover:grayscale-0 transition-all duration-300" },
        { src: "/assets/images/BrandsResearch/JAMAInternalMedicineupdated 1.png", width: 206, height: 24, className: "w-[206px] opacity-54 grayscale hover:grayscale-0 transition-all duration-300" },
        { src: "/assets/images/BrandsResearch/pub_journal-of-consulting-and-clinical-psychology 1.png", width: 129, height: 129, className: "w-[129px] opacity-55 grayscale hover:grayscale-0 transition-all duration-300" },
        { src: "/assets/images/BrandsResearch/e6b4a90bade979c251b39d8d500ad46b_400x400 1.png", width: 127, height: 127, className: "w-[127px] opacity-51 grayscale hover:grayscale-0 transition-all duration-300" },
        { src: "/assets/images/BrandsResearch/images 1.png", width: 153, height: 42, className: "w-[153px] opacity-47 grayscale hover:grayscale-0 transition-all duration-300" },
    ];

    if (variant === "research") {
        return (
            <div className={`w-full bg-white border-b border-[#d8d8d8] py-12 flex items-center justify-center box-border ${className}`}>
                <section className="flex items-center justify-center gap-[60px] flex-wrap px-4 max-w-7xl">
                    {researchImages.map((img, index) => (
                        <Image
                            key={index}
                            className={`${img.className} relative max-h-full object-contain`}
                            loading="lazy"
                            width={img.width}
                            height={img.height}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            alt="Partner Logo"
                            src={img.src}
                        />
                    ))}
                </section>
            </div>
        );
    }

    // Default variant with background image
    return (
        <div className={`w-full h-[226.4px] bg-[#ececec] flex items-center justify-center ${className}`}>
            <div className="w-full max-w-[1440px] h-full relative">
                <Image
                    src="/assets/images/Brands/brands-home.png"
                    alt="Partner Institutions"
                    width={1440}
                    height={226}
                    className="w-full h-full object-contain"
                    priority
                />
            </div>
        </div>
    );
};
