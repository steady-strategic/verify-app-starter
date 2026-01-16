import React from "react";
import Link from "next/link";
import { CardsSectionProps } from "./types";

export const Cards: React.FC<CardsSectionProps> = ({
    headline,
    cards,
    cta,
    variant = "default",
    className = "",
    id,
}) => {
    // Validate that exactly 4 cards are provided for default variant
    if (variant === "default" && cards.length !== 4) {
        console.warn(
            `Cards component expects exactly 4 cards for "default" variant, but received ${cards.length}`
        );
    }

    // Split headline text to highlight specific word
    const renderHeadline = () => {
        if (!headline.highlight) {
            return headline.text;
        }

        const parts = headline.text.split(headline.highlight);
        return (
            <>
                {parts[0]}
                <span className="text-primary-11">{headline.highlight}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className={`flex flex-col items-center gap-14 py-16 px-4 ${className}`} id={id}>
            {/* Headline */}
            <h2
                className="text-center text-gray-700 max-w-[694px]"
                style={{
                    fontFamily: "var(--content-header-2-font-family)",
                    fontSize: "var(--content-header-2-font-size)",
                    fontWeight: "var(--content-header-2-font-weight)",
                    letterSpacing: "var(--content-header-2-letter-spacing)",
                    lineHeight: "var(--content-header-2-line-height)",
                }}
            >
                {renderHeadline()}
            </h2>

            {/* Cards Grid Container */}
            <div className="w-full max-w-[1280px] rounded-lg shadow-card bg-white">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row">
                    {/* Card 1 */}
                    <div className="flex-1 p-12 flex flex-col gap-4 text-center">
                        <h3
                            className="text-colors-gray-900"
                            style={{
                                fontFamily: "var(--title-font-family)",
                                fontSize: "var(--title-font-size)",
                                fontWeight: "var(--title-font-weight)",
                                letterSpacing: "var(--title-letter-spacing)",
                                lineHeight: "var(--title-line-height)",
                            }}
                        >
                            {cards[0]?.title}
                        </h3>
                        <div
                            className="text-gray-700 whitespace-pre-line"
                            style={{
                                fontFamily: "var(--paragraph-font-family)",
                                fontSize: "var(--paragraph-font-size)",
                                fontWeight: "var(--paragraph-font-weight)",
                                lineHeight: "var(--paragraph-line-height)",
                            }}
                        >
                            {cards[0]?.stats.join("\n")}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-colors-gray-200"></div>
                    {/* Horizontal Divider for mobile */}
                    <div className="md:hidden h-px bg-colors-gray-200"></div>

                    {/* Card 2 */}
                    <div className="flex-1 p-12 flex flex-col gap-4 text-center">
                        <h3
                            className="text-colors-gray-900"
                            style={{
                                fontFamily: "var(--title-font-family)",
                                fontSize: "var(--title-font-size)",
                                fontWeight: "var(--title-font-weight)",
                                letterSpacing: "var(--title-letter-spacing)",
                                lineHeight: "var(--title-line-height)",
                            }}
                        >
                            {cards[1]?.title}
                        </h3>
                        <div
                            className="text-gray-700 whitespace-pre-line"
                            style={{
                                fontFamily: "var(--paragraph-font-family)",
                                fontSize: "var(--paragraph-font-size)",
                                fontWeight: "var(--paragraph-font-weight)",
                                lineHeight: "var(--paragraph-line-height)",
                            }}
                        >
                            {cards[1]?.stats.join("\n")}
                        </div>
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="h-px bg-colors-gray-200"></div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row">
                    {/* Card 3 */}
                    <div className="flex-1 p-12 flex flex-col gap-4 text-center">
                        <h3
                            className="text-colors-gray-900"
                            style={{
                                fontFamily: "var(--title-font-family)",
                                fontSize: "var(--title-font-size)",
                                fontWeight: "var(--title-font-weight)",
                                letterSpacing: "var(--title-letter-spacing)",
                                lineHeight: "var(--title-line-height)",
                            }}
                        >
                            {cards[2]?.title}
                        </h3>
                        <div
                            className="text-gray-700 whitespace-pre-line"
                            style={{
                                fontFamily: "var(--paragraph-font-family)",
                                fontSize: "var(--paragraph-font-size)",
                                fontWeight: "var(--paragraph-font-weight)",
                                lineHeight: "var(--paragraph-line-height)",
                            }}
                        >
                            {cards[2]?.stats.join("\n")}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-colors-gray-200"></div>
                    {/* Horizontal Divider for mobile */}
                    <div className="md:hidden h-px bg-colors-gray-200"></div>

                    {/* Card 4 */}
                    <div className="flex-1 p-12 flex flex-col gap-4 text-center">
                        <h3
                            className="text-colors-gray-900"
                            style={{
                                fontFamily: "var(--title-font-family)",
                                fontSize: "var(--title-font-size)",
                                fontWeight: "var(--title-font-weight)",
                                letterSpacing: "var(--title-letter-spacing)",
                                lineHeight: "var(--title-line-height)",
                            }}
                        >
                            {cards[3]?.title}
                        </h3>
                        <div
                            className="text-gray-700 whitespace-pre-line"
                            style={{
                                fontFamily: "var(--paragraph-font-family)",
                                fontSize: "var(--paragraph-font-size)",
                                fontWeight: "var(--paragraph-font-weight)",
                                lineHeight: "var(--paragraph-line-height)",
                            }}
                        >
                            {cards[3]?.stats.join("\n")}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            {cta && (
                <Link
                    href={cta.href}
                    className="px-6 py-3 bg-primary-11 hover:bg-primary-2 text-white font-bold rounded-md transition-colors"
                    style={{
                        fontSize: "var(--paragraph-font-size)",
                    }}
                >
                    {cta.label}
                </Link>
            )}
        </section>
    );
};
