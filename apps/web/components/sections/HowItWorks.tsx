import React from "react";
import Image from "next/image";
import { HowItWorksSectionProps } from "./types";

export const HowItWorks: React.FC<HowItWorksSectionProps> = ({
    title,
    description,
    subtitle,
    steps,
    cards,
    research,
    sectionHeader,
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
                {sectionHeader && (
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <h2
                            className={`font-bold text-stone-900 leading-tight ${variant === 'home' ? 'text-[28px]' : 'text-3xl md:text-4xl'}`}
                            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                        >
                            {sectionHeader}
                        </h2>
                    </div>
                )}
                {/* White content container */}
                <div className="bg-white rounded-xl shadow-sm w-[1280px] mx-auto py-12 relative">
                    <div className="absolute top-[180px] left-[545px] w-[206px] h-[206px] flex flex-col items-center justify-center z-20">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/assets/images/Ellipse33_top.svg"
                                alt="Background"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
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
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Header */}
                        <div className="flex flex-col items-center gap-6">
                            <h2
                                className={`text-center ${variant === 'home' ? 'font-normal' : 'font-bold'} ${variant === "r1" ? "max-w-[900px]" : "max-w-[660px]"}`}
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: variant === "home" ? "20px" : "28px",
                                    fontWeight: variant === "home" ? 400 : 700,
                                    letterSpacing: "-0.56px",
                                    lineHeight: "35px",
                                    color: "#1f2a37",
                                }}
                            >
                                {title}
                            </h2>

                            {description && (
                                <p
                                    className="text-center max-w-[700px]"
                                    style={{
                                        fontFamily: "var(--font-inter), Inter, sans-serif",
                                        fontSize: "18px",
                                        fontWeight: 400,
                                        lineHeight: "27px",
                                        color: "#4b5563",
                                    }}
                                >
                                    {description}
                                </p>
                            )}


                        </div>

                        {/* Steps Progress with Cards */}
                        <div className={`relative w-full flex flex-col items-center gap-8 ${variant === 'home' ? 'mt-[156px]' : 'mt-[126px]'}`}>
                            {/* Background SVG */}
                            <div className="relative w-full h-[218px] flex items-center justify-center">
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={variant === "r1" ? "/assets/images/bg-vector.svg" : "/assets/images/step-progress-background.svg"}
                                        alt="Step progress"
                                        fill
                                        className={variant === "r1" ? "object-cover scale-125" : "object-contain"}
                                    />
                                </div>

                                {/* Step Labels - Grid Layout */}
                                <div className="relative z-10 grid grid-cols-5 items-center w-full max-w-2xl top-[20px]">
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
                                                className="text-center whitespace-nowrap"
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
