import React from "react";
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

// Thumb Up icon component (inline SVG)
const ThumbUpIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M1.688 2.5757H0.422C0.31 2.5757 0.203 2.6177 0.124 2.6917C0.044 2.7667 0 2.8667 0 2.9727V6.5407C0 6.7507 0.089 6.9527 0.247 7.1007C0.406 7.2497 0.62 7.3337 0.844 7.3337H1.266C1.49 7.3337 1.705 7.2497 1.863 7.1007C2.021 6.9527 2.11 6.7507 2.11 6.5407V2.9727C2.11 2.8667 2.066 2.7667 1.987 2.6917C1.908 2.6177 1.8 2.5757 1.688 2.5757Z"
            fill="currentColor"
        />
        <path
            d="M7.156 2.5757H5.487L6.144 0.7917C6.166 0.6287 6.126 0.4637 6.032 0.3247C5.937 0.1857 5.794 0.0827 5.627 0.0327C5.46 -0.0163 5.28 0.00970001 5.118 0.0517001C4.956 0.1137 4.821 0.2267 4.739 0.3717C4.251 1.1537 3.65 1.8687 2.954 2.4967V6.2967H3.003C3.893 6.5277 5.071 6.9367 6.162 6.9367C6.753 6.9367 6.834 6.7287 6.956 6.4147L7.949 3.6397C7.996 3.5197 8.01 3.3907 7.993 3.2647C7.975 3.1387 7.925 3.0177 7.847 2.9137C7.769 2.8097 7.666 2.7237 7.545 2.6657C7.425 2.6067 7.291 2.5757 7.156 2.5757Z"
            fill="currentColor"
        />
    </svg>
);

export const Content: React.FC<ContentSectionProps> = ({
    title,
    subtitle,
    features,
    image,
    variant = "default",
    className = "",
    id,
    titleHighlight,
    buttons,
}) => {
    const isSwap = variant === "swap";
    const isHowItWorks = variant === "Content-HowItWorks" || variant === "Content-forClinicians";
    const isHomeAbout = variant === "Home-About";
    const imageRadiusClass = (isSwap || isHowItWorks) ? "rounded-[20px]" : "rounded-xl";

    // Home-About variant has a completely different layout
    if (isHomeAbout) {
        return (
            <section
                className={`flex flex-col items-center gap-14 py-16 px-4 ${className}`}
                id={id}
            >
                <div className="w-full max-w-[1480px] border border-dashed border-[#8a38f5] rounded-[5px] p-8 flex flex-col md:flex-row gap-8 items-start">
                    {/* Profile Image - Circular */}
                    <div className="flex-shrink-0">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={280}
                            height={280}
                            className="w-[280px] h-[280px] rounded-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Title with highlight */}
                        <h1 className="font-inter text-[28px] font-bold leading-[35px] tracking-[-0.56px] text-[#111928] m-0">
                            {titleHighlight ? (
                                <>
                                    <span className="text-[#8a38f5]">{titleHighlight}</span>
                                    {title.replace(titleHighlight, "")}
                                </>
                            ) : (
                                title
                            )}
                        </h1>

                        {/* Subtitle */}
                        <h2 className="font-inter text-[28px] font-bold leading-[35px] text-[#111928] m-0">
                            {subtitle}
                        </h2>

                        {/* Description - using features array for paragraphs */}
                        <div className="flex flex-col gap-3">
                            {features.map((feature, index) => (
                                <p
                                    key={index}
                                    className="font-inter text-[18px] font-normal leading-[27px] text-[#374151] m-0"
                                >
                                    {feature.text}
                                </p>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        {buttons && (
                            <div className="flex gap-4 mt-auto">
                                {buttons.linkedin && (
                                    <a
                                        href={buttons.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-inter text-[14px] font-medium text-[#111928] border border-[#111928] rounded px-4 py-2 hover:border-[#8a38f5] hover:text-[#8a38f5] transition-all duration-300 no-underline"
                                    >
                                        LinkedIn Profile
                                    </a>
                                )}
                                {buttons.twitter && (
                                    <a
                                        href={buttons.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-inter text-[14px] font-medium text-[#111928] border border-[#111928] rounded px-4 py-2 hover:border-[#8a38f5] hover:text-[#8a38f5] transition-all duration-300 no-underline"
                                    >
                                        Follow on X
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    // Image Bundle (for other variants)
    const ImageColumn = (
        <div className={`flex-shrink-0 w-full md:w-[480px] ${imageRadiusClass} overflow-hidden`}>
            <Image
                src={image.src}
                alt={image.alt}
                width={480}
                height={480}
                className="w-full h-full object-cover"
            />
        </div>
    );

    // Content Bundle (for other variants)
    const ContentColumn = (
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
                            {/* Icon */}
                            {isHowItWorks ? (
                                <div className="w-6 h-6 flex-shrink-0 bg-primary-1 rounded-full flex items-center justify-center text-white">
                                    <ThumbUpIcon className="w-3 h-3" />
                                </div>
                            ) : (
                                <div className="w-6 h-6 flex-shrink-0 text-primary-11">
                                    <CheckIcon className="w-full h-full" />
                                </div>
                            )}

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
    );

    return (
        <section
            className={`flex flex-col items-center gap-14 py-16 px-4 ${className}`}
            id={id}
        >
            {/* Content Row */}
            <div className="w-full max-w-[1280px] flex flex-col md:flex-row gap-16 items-center">
                {isSwap ? (
                    <>
                        {ContentColumn}
                        {ImageColumn}
                    </>
                ) : (
                    <>
                        {ImageColumn}
                        {ContentColumn}
                    </>
                )}
            </div>
        </section>
    );
};
