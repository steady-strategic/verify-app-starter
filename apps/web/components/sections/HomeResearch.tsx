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
            <div className="flex flex-col gap-[92px]">
                {/* Heading */}
                <h2 className="font-inter text-[28px] font-bold leading-[35px] tracking-[-0.56px] text-[#111928] max-w-[636px] mx-auto text-center"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] w-full">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-[16px]">
                            {/* Icon */}
                            <div className="w-[32px] h-[32px] rounded-full bg-[#d80ada] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/assets/images/home-research-checkmark.svg"
                                    alt="Checkmark"
                                    width={16}
                                    height={16}
                                    className="text-white"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="font-inter text-[20px] font-bold text-[#111928]">
                                {feature.title}
                            </h3>
                            {/* Text */}
                            <p className="font-inter text-[18px] font-normal leading-[27px] text-[#374151]">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            {cta && (
                <div className="flex justify-center">
                    <Link
                        href={cta.href}
                        className="bg-[#d80ada] text-white px-6 py-3 rounded-lg font-inter font-bold text-[18px] hover:bg-opacity-90 transition-opacity"
                    >
                        {cta.text}
                    </Link>
                </div>
            )}
        </section>
    );
};
