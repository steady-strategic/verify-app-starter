import React from "react";
import Image from "next/image";
import { HowItWorksSectionProps } from "./types";

export const HowItWorks: React.FC<HowItWorksSectionProps> = ({
    title,
    subtitle,
    steps,
    cards,
    research,
    variant = "default",
    className = "",
    id,
}) => {
    return (
        <section
            className={`w-full py-16 ${className}`}
            style={{ backgroundColor: "#fafafa" }}
            id={id}
        >
            <div className="container mx-auto px-6">
                {/* White content container */}
                <div className="bg-white rounded-xl shadow-sm w-[1280px] mx-auto py-12">
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Header */}
                        <div className="flex flex-col items-center gap-6">
                            <h2
                                className="text-center font-bold max-w-[559px]"
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "28px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.56px",
                                    lineHeight: "35px",
                                    color: "#1f2a37",
                                }}
                            >
                                {title}
                            </h2>

                            {/* Lotus Icon and Subtitle */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-[106px] h-[92px] relative">
                                    <Image
                                        src="/assets/images/lotus-flower.svg"
                                        alt="Lotus flower"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span
                                    style={{
                                        fontFamily: "var(--font-inter), Inter, sans-serif",
                                        fontSize: "20px",
                                        fontWeight: 600,
                                        color: "#e704e7",
                                    }}
                                >
                                    {subtitle}
                                </span>
                            </div>
                        </div>

                        {/* Steps Progress with Cards */}
                        <div className="relative w-full flex flex-col items-center gap-8">
                            {/* Background SVG */}
                            <div className="relative w-full h-[218px] flex items-center justify-center">
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src="/assets/images/step-progress-background.svg"
                                        alt="Step progress"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Step Labels - Grid Layout */}
                                <div className="relative z-10 grid grid-cols-5 items-center w-full max-w-2xl">
                                    {steps.map((step, index) => (
                                        <React.Fragment key={index}>
                                            <div
                                                className="flex items-center justify-center bg-white rounded-full px-8 min-h-[48px] mx-auto"
                                                style={{
                                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                                    fontSize: "18px",
                                                    fontWeight: 500,
                                                    letterSpacing: "-0.36px",
                                                    color: "#454a55",
                                                }}
                                            >
                                                {step}
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="w-[137px] h-6 relative flex-shrink-0 mx-auto">
                                                    <Image
                                                        src="/assets/images/Arrow1.svg"
                                                        alt="Arrow"
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Cards Section - Grid Layout matching steps */}
                            <div className="grid grid-cols-5 items-start w-full max-w-2xl">
                                {cards.map((card, index) => (
                                    <React.Fragment key={index}>
                                        <div className="flex flex-col items-center gap-4 mx-auto">
                                            {/* Icon Circle */}
                                            <div
                                                className="w-[107px] h-[107px] rounded-full flex items-center justify-center"
                                                style={{
                                                    backgroundColor: card.iconColor,
                                                }}
                                            >
                                                <div className="w-[60px] h-[60px] relative">
                                                    <Image
                                                        src={card.iconSrc}
                                                        alt={card.title}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>

                                            {/* Card Title */}
                                            <h3
                                                className="text-center"
                                                style={{
                                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    color: "#454a55",
                                                }}
                                            >
                                                {card.title}
                                            </h3>
                                        </div>
                                        {/* Empty column for arrow space */}
                                        {index < cards.length - 1 && <div></div>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Research Quote */}
                        <div
                            className="text-center max-w-[524px]"
                            style={{
                                fontFamily: "var(--font-inter), Inter, sans-serif",
                                fontSize: "18px",
                                fontWeight: 400,
                                lineHeight: "27px",
                                color: "#454a55",
                            }}
                        >
                            <strong style={{ fontWeight: 600 }}>MORE Research shows:</strong>{" "}
                            {research}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
