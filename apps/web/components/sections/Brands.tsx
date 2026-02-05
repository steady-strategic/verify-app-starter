import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { BaseSectionProps, BrandsSectionProps } from "./types";

export const Brands: React.FC<BrandsSectionProps> = ({ variant = "default", className = "" }) => {
    const images = {
        default: [
            { src: "/assets/images/Brands/Johns-Hopkins-University-Logo-1@2x.png", width: 216, height: 121, className: "w-[216px]" },
            { src: "/assets/images/Brands/hms-logo-final-rgb-1@2x.png", width: 243, height: 80, className: "w-[243px]" },
            { src: "/assets/images/Brands/University-of-California-San-Diego-logo-svg-2@2x.png", width: 176, height: 34.4, className: "w-44" },
            { src: "/assets/images/Brands/pngegg-1@2x.png", width: 113, height: 97, className: "w-[113px]" },
            { src: "/assets/images/Brands/kaiser-permanente-eastmoreland-dental-office-kaiser-westside-medical-center-health-insurance-health-care-others-d924d53548165cd067655983122df683-1@2x.png", width: 252, height: 86, className: "w-[252px]" },
        ],
        research: [
            { src: "/assets/images/BrandsResearch/uOQVGEqX_400x400 1.png", width: 110, height: 110, className: "w-[110px] opacity-48 grayscale hover:grayscale-0 transition-all duration-300" },
            { src: "/assets/images/BrandsResearch/images 1.png", width: 153, height: 42, className: "w-[153px] opacity-47 grayscale hover:grayscale-0 transition-all duration-300" },
            { src: "/assets/images/BrandsResearch/pub_journal-of-consulting-and-clinical-psychology 1.png", width: 129, height: 129, className: "w-[129px] opacity-55 grayscale hover:grayscale-0 transition-all duration-300" },
            { src: "/assets/images/BrandsResearch/JAMAInternalMedicineupdated 1.png", width: 206, height: 24, className: "w-[206px] opacity-54 grayscale hover:grayscale-0 transition-all duration-300" },
            { src: "/assets/images/BrandsResearch/e6b4a90bade979c251b39d8d500ad46b_400x400 1.png", width: 127, height: 127, className: "w-[127px] opacity-51 grayscale hover:grayscale-0 transition-all duration-300" },
            { src: "/assets/images/BrandsResearch/jama_psych 1.png", width: 200, height: 31, className: "w-[200px] opacity-57 grayscale hover:grayscale-0 transition-all duration-300" },
        ]
    };

    const currentImages = images[variant as keyof typeof images] || images.default;

    return (
        <div
            className={`w-full ${variant === "research" ? "bg-white border-b border-[#d8d8d8] py-12" : "h-[226.4px] bg-[#efefef]"} flex items-center justify-center box-border ${className}`}
        >
            <section className={`flex items-center justify-center ${variant === "research" ? "gap-[60px]" : "gap-[60px]"} flex-wrap px-4 max-w-7xl`}>
                {currentImages.map((img, index) => (
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
};
