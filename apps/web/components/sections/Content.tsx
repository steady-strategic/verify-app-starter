import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContentSectionProps } from "./types";

// Check icon component (inline SVG)
const CheckIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
            d="M7 12L10.5 15.5L17 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const Content: React.FC<ContentSectionProps> = ({
    title,
    subtitle,
    features,
    image,
    cta,
    variant = "default",
    className = "",
    id,
}) => {
    return (
        <section
            className={`flex flex-col items-center gap-14 py-16 px-4 ${className}`}
            id={id}
        >
            {/* Content Row - Image + Content Column */}
            <div className="w-full max-w-[1280px] flex flex-col md:flex-row gap-16 items-center">
                {/* Left: Image */}
                <div className="flex-shrink-0 w-full md:w-[480px] rounded-xl overflow-hidden">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={480}
                        height={480}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Content Column */}
                <div className="flex flex-col gap-8 flex-1">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4">
                        {/* Title */}
                        <h2
                            className="text-colors-gray-900"
                            style={{
                                fontFamily: "var(--content-header-2-font-family)",
                                fontSize: "var(--content-header-2-font-size)",
                                fontWeight: "var(--content-header-2-font-weight)",
                                letterSpacing: "var(--content-header-2-letter-spacing)",
                                lineHeight: "var(--content-header-2-line-height)",
                            }}
                        >
                            {title}
                        </h2>

                        {/* Subtitle */}
                        <p
                            className="text-colors-gray-700"
                            style={{
                                fontFamily: "var(--title-font-family)",
                                fontSize: "var(--title-font-size)",
                                fontWeight: "var(--title-font-weight)",
                                letterSpacing: "var(--title-letter-spacing)",
                                lineHeight: "var(--title-line-height)",
                            }}
                        >
                            {subtitle}
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="flex flex-col gap-4">
                        {/* Separator Line */}
                        <div className="h-px bg-colors-gray-200 w-full"></div>

                        {/* Feature List */}
                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-2.5 items-start">
                                    {/* Check Icon */}
                                    <div className="w-6 h-6 flex-shrink-0 text-primary-11">
                                        <CheckIcon className="w-full h-full" />
                                    </div>

                                    {/* Feature Text */}
                                    <p
                                        className="text-colors-gray-900"
                                        style={{
                                            fontFamily: "var(--paragraph-font-family)",
                                            fontSize: "var(--paragraph-font-size)",
                                            fontWeight: "var(--paragraph-font-weight)",
                                            lineHeight: "var(--paragraph-line-height)",
                                        }}
                                    >
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            {cta && (
                <Link
                    href={cta.href}
                    className="px-6 py-3 bg-primary-11 hover:bg-primary-2 text-white font-bold rounded-md transition-colors"
                    style={{ fontSize: "var(--paragraph-font-size)" }}
                >
                    {cta.label}
                </Link>
            )}
        </section>
    );
};
