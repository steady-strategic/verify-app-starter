
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeAboutSectionProps } from "./types";

export const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({
    variant = "default",
    title,
    subtitle,
    description,
    profileImage,
    socialLinks,
    className = "",
    id,
}) => {
    return (
        <section
            className={`w-full bg-[#fafafa] flex justify-center py-12 ${className}`}
            id={id}
        >
            <div className="w-full max-w-[1480px] px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
                {/* Profile Image */}
                <div className="relative w-[280px] h-[280px] flex-shrink-0">
                    <Image
                        src={profileImage.src}
                        alt={profileImage.alt}
                        fill
                        className="rounded-full object-cover"
                    />
                </div>

                {/* Content Wrapper */}
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                    {/* Title & Subtitle */}
                    <div>
                        <h1 className="font-sans text-[28px] font-bold leading-[35px] tracking-[-0.56px] text-[#111928]">
                            {title}
                        </h1>
                        <h2 className="font-sans text-[28px] font-bold leading-[35px] text-[#111928]">
                            {subtitle}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-[18px] font-normal leading-[27px] text-[#374151]">
                        {description}
                    </p>

                    {/* Buttons Container */}
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                        {socialLinks.linkedin && (
                            <Link
                                href={socialLinks.linkedin}
                                className="font-sans text-[14px] font-medium text-[#111928] border border-[#111928] rounded px-4 py-2 hover:border-[#8a38f5] hover:text-[#8a38f5] transition-all duration-300"
                            >
                                LinkedIn Profile
                            </Link>
                        )}
                        {socialLinks.x && (
                            <Link
                                href={socialLinks.x}
                                className="font-sans text-[14px] font-medium text-[#111928] border border-[#111928] rounded px-4 py-2 hover:border-[#8a38f5] hover:text-[#8a38f5] transition-all duration-300"
                            >
                                Follow on X
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
