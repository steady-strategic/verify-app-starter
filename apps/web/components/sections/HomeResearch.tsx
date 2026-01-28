import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeResearchSectionProps } from "./types";

export const HomeResearch: React.FC<HomeResearchSectionProps> = ({
    heading,
    features,
    cta,
    variant = "default",
    className = "",
    id,
}) => {
    return (
        <section
            className={`flex flex-col gap-[64px] w-full max-w-[1440px] mx-auto px-4 py-16 ${className}`}
            id={id}
        >
            <div className="flex flex-col gap-[64px] items-center">
                {/* Heading */}
                <h2 className="font-sans text-[32px] md:text-[40px] font-bold leading-[1.2] tracking-normal text-[#111928] max-w-[900px] mx-auto text-center"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] w-full max-w-[1240px]">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-[24px]">
                            {/* Icon */}
                            <div className="w-[32px] h-[32px] rounded-full bg-[#d80ada] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/assets/images/check-icon.svg"
                                    alt="Checkmark"
                                    width={16}
                                    height={16}
                                    className="text-white brightness-0 invert"
                                />
                            </div>

                            <div className="flex flex-col gap-[16px]">
                                {/* Title */}
                                <h3
                                    className="font-inter text-[20px] leading-[1.4] font-bold text-[#111928]"
                                    dangerouslySetInnerHTML={{ __html: feature.title }}
                                />

                                {/* Stats List */}
                                <div className="flex flex-col gap-[12px]">
                                    {feature.stats && feature.stats.map((stat, i) => (
                                        <div key={i} className="font-inter text-[16px] leading-[1.5] text-[#374151]">
                                            <span className="font-bold text-[#d80ada] mr-1.5">
                                                {stat.value}
                                            </span>
                                            {stat.label}
                                        </div>
                                    ))}
                                    {/* Fallback for text if no stats (legacy support) */}
                                    {!feature.stats && feature.text && (
                                        <p className="font-inter text-[18px] font-normal leading-[27px] text-[#374151]">
                                            {feature.text}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            {cta && (
                <div className="flex justify-center">
                    <Link
                        href={cta.href}
                        className="bg-[#d80ada] text-white px-8 py-3.5 rounded-lg font-inter font-bold text-[18px] hover:bg-opacity-90 transition-opacity"
                    >
                        {cta.text}
                    </Link>
                </div>
            )}
        </section>
    );
};
