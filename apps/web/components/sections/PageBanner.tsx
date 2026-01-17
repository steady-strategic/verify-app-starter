import React from "react";
import Image from "next/image";
import { PageBannerSectionProps } from "./types";

export const PageBanner: React.FC<PageBannerSectionProps> = ({
    title,
    description,
    backgroundImage,
    foregroundImage,
    variant = "default",
    className = "",
    id,
}) => {
    return (
        <section
            className={`relative w-full h-[680px] overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, #6b21a8 0%, #0f172a 100%)",
            }}
            id={id}
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 opacity-50">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center px-20">
                {/* Left: Text Section */}
                <div className="max-w-[720px] flex flex-col gap-6">
                    {/* Title */}
                    <h1
                        className="text-white"
                        style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "46px",
                            fontWeight: 800,
                            letterSpacing: "-0.92px",
                            lineHeight: "1.2",
                        }}
                    >
                        {title}
                    </h1>

                    {/* Description Paragraphs */}
                    <div className="flex flex-col gap-4 max-w-[571px]">
                        {description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-white"
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    lineHeight: "27px",
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right: Foreground Image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
                    <Image
                        src={foregroundImage.src}
                        alt={foregroundImage.alt}
                        fill
                        className="object-cover rounded-3xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
