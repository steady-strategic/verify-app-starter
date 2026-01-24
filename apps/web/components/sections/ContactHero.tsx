"use client";

import React from "react";
import Image from "next/image";
import { ContactHeroSectionProps } from "./types";
import { HubspotForm } from "../ui/HubspotForm";

export const ContactHero: React.FC<ContactHeroSectionProps> = ({
    title,
    description,
    backgroundImage,
    className = "",
    id,
    formId = "12898bbb-df2b-4622-87cf-cf052a0dd4ff", // Default Contact Form ID
}) => {
    return (
        <section id={id} className={`relative w-full ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 h-[561px] w-full z-0">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center min-h-[561px] py-16">
                <div className="w-full max-w-[1440px] px-4">
                    {/* Heading and Description */}
                    <div className="text-center mb-12">
                        <h1 className="font-sans text-[36px] font-[800] text-white mb-4 leading-tight tracking-[-0.36px]">
                            {title}
                        </h1>
                        <p className="font-sans text-[20px] font-[400] text-white leading-[30px] max-w-[672px] mx-auto">
                            {description}
                        </p>
                    </div>

                    {/* Contact Form Container */}
                    <div className="max-w-[811px] mx-auto bg-white rounded-[24px] border border-[#f4f4f4] shadow-[0px_0px_9.4px_rgba(0,0,0,0.03)] p-8 gap-6 flex flex-col">
                        <HubspotForm formId={formId} />
                    </div>
                </div>
            </div>
        </section>
    );
};
