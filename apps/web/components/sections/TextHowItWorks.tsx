import React from "react";
import Image from "next/image";
import { TextHowItWorksSectionProps } from "./types";

export const TextHowItWorks: React.FC<TextHowItWorksSectionProps> = ({
    header,
    features,
    variant = "default",
    className = "",
    id,
}) => {
    const isClinicians = variant === "clinicians";
    const isR1 = variant === "r1";

    return (
        <section
            id={id}
            className={`w-full py-16 px-6 ${className}`}
            style={{ backgroundColor: "#FFFFFF" }}
        >
            <div className={`container mx-auto max-w-7xl flex flex-col ${isR1 ? "items-center text-center" : ""} ${isClinicians ? "gap-[48px]" : "gap-[92px]"}`}>
                {/* Header */}
                <h2
                    className={`max-w-4xl ${isR1 ? "text-center" : ""}`}
                    style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "28px",
                        fontWeight: 700,
                        lineHeight: "35px",
                        letterSpacing: "-0.56px",
                        color: isClinicians ? "#111928" : "#374151",
                    }}
                >
                    {header}
                </h2>

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-4 text-left items-start">
                            {/* Icon Container */}
                            <div
                                className="rounded-full flex items-center justify-center w-12 h-12 mb-2"
                                style={{ backgroundColor: feature.iconBgColor }}
                            >
                                <div className={`relative ${isClinicians ? "w-6 h-6" : "w-8 h-8"}`}>
                                    <Image
                                        src={feature.iconSrc}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    color: "#111928",
                                    marginBottom: "8px",
                                }}
                            >
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: isClinicians ? "16px" : "18px",
                                    fontWeight: 400,
                                    lineHeight: isClinicians ? "24px" : "27px",
                                    color: isClinicians ? "#6B7280" : "#374151",
                                }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
