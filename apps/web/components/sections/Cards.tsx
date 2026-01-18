import React from "react";
import Link from "next/link";
import { CardsSectionProps } from "./types";

// Helper component for rendering a single card
const SingleCard: React.FC<{ card: { title: string; stats: string[] } }> = ({ card }) => (
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
            {card?.title}
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
            {card?.stats.join("\n")}
        </div>
    </div>
);

// Helper component for a row of two cards
const CardRow: React.FC<{ leftCard: any; rightCard: any; hasBottomDivider?: boolean }> = ({
    leftCard,
    rightCard,
    hasBottomDivider = true,
}) => (
    <>
        <div className="flex flex-col md:flex-row">
            <SingleCard card={leftCard} />
            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-px bg-colors-gray-200"></div>
            {/* Horizontal Divider (Mobile) */}
            <div className="md:hidden h-px bg-colors-gray-200"></div>
            <SingleCard card={rightCard} />
        </div>
        {hasBottomDivider && <div className="h-px bg-colors-gray-200"></div>}
    </>
);

export const Cards: React.FC<CardsSectionProps> = ({
    headline,
    cards,
    cta,
    variant = "default",
    className = "",
    id,
}) => {
    // Validation
    if (variant === "default" && cards.length !== 4) {
        console.warn(`Cards component (default) expects 4 cards, received ${cards.length}`);
    } else if (variant === "Cards2x3" && cards.length !== 6) {
        console.warn(`Cards component (Cards2x3) expects 6 cards, received ${cards.length}`);
    }

    // Headline highlighting logic
    const renderHeadline = () => {
        if (!headline.highlight) return headline.text;
        const parts = headline.text.split(headline.highlight);
        return (
            <>
                {parts[0]}
                <span className="text-primary-1">{headline.highlight}</span>
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

            {headline.subtitle && (
                <p
                    className="text-center text-gray-500 max-w-[800px] mt-[-2rem]"
                    style={{
                        fontFamily: "var(--paragraph-font-family)",
                        fontSize: "var(--paragraph-font-size)",
                        fontWeight: "var(--paragraph-font-weight)",
                        lineHeight: "var(--paragraph-line-height)",
                    }}
                >
                    {headline.subtitle}
                </p>
            )}

            {/* Cards Grid Container */}
            <div className="w-full max-w-[1280px] rounded-lg shadow-card bg-white">
                {/* Variant: Default (2x2) */}
                {variant === "default" && (
                    <>
                        <CardRow leftCard={cards[0]} rightCard={cards[1]} />
                        <CardRow leftCard={cards[2]} rightCard={cards[3]} hasBottomDivider={false} />
                    </>
                )}

                {/* Variant: Cards2x3 (2x3) */}
                {variant === "Cards2x3" && (
                    <>
                        <CardRow leftCard={cards[0]} rightCard={cards[1]} />
                        <CardRow leftCard={cards[2]} rightCard={cards[3]} />
                        <CardRow leftCard={cards[4]} rightCard={cards[5]} hasBottomDivider={false} />
                    </>
                )}
            </div>

            {/* CTA Button */}
            {cta && (
                <Link
                    href={cta.href}
                    className="px-6 py-3 bg-primary-1 hover:brightness-110 text-white font-bold rounded-md transition-colors"
                    style={{ fontSize: "var(--paragraph-font-size)" }}
                >
                    {cta.label}
                </Link>
            )}
        </section>
    );
};
