
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBannerSectionProps } from "./types";

export const AppBanner: React.FC<AppBannerSectionProps> = ({
    variant = "default",
    title,
    subtitle,
    description,
    secondaryDescription,
    features,
    ctaText,
    appStoreLink,
    playStoreLink,
    backgroundImage,
    phoneImage,
    className = "",
    id,
}) => {
    return (
        <section
            id={id}
            className={`relative w-full min-h-[1200px] md:min-h-[921px] overflow-hidden ${className}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0"> {/* Fallback color removed */}
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover object-center scale-[1.01]"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-start gap-12 md:gap-[101px] h-full">

                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-8 text-white max-w-[699px] md:pl-[111px] pt-[96px]">
                    <div>
                        <div className="flex flex-col gap-4">
                            <div className="font-sans text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                {title}
                            </div>
                            {subtitle && (
                                <p className="font-sans text-xl md:text-[38px] font-extralight italic text-white/90">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <p className="font-sans text-lg leading-relaxed text-white/90 mt-8">
                            {description}
                        </p>

                        <div className="w-full h-px bg-white/20 mt-4" />
                    </div>

                    {/* Features List or Secondary Description */}
                    {variant === "patients" && secondaryDescription ? (
                        <p className="font-sans text-lg leading-relaxed text-white/90">
                            {secondaryDescription}
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {features?.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#D80ADA] flex items-center justify-center">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="font-sans text-base md:text-[16px] font-medium text-white">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* CTA & Store Buttons - REMOVED */}
                </div>

                {/* Phone Mockup */}
                <div className="hidden md:flex flex-1 w-full max-w-sm md:max-w-md relative justify-center self-center md:self-auto pt-[96px]">
                    <div className="relative w-full h-[640px]">
                        <Image
                            src={phoneImage.src}
                            alt={phoneImage.alt}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
