// components/sections/HowItWorks.mobile.tsx
import Image from "next/image";
import React from "react";
import type { HowItWorksSectionProps } from "./types";

const DEFAULT_STEPS = [
    {
        label: "Step 1",
        title: "MORE Mindfulness",
        icon: "/assets/images/HowItWorks/mindfulness-icon-pink.svg",
    },
    {
        label: "Step 2",
        title: "MORE Reappraisal",
        icon: "/assets/images/HowItWorks/reappraisal-icon-pink.svg",
    },
    {
        label: "Step 3",
        title: "MORE Savoring",
        icon: "/assets/images/HowItWorks/savoring-icon-pink.svg",
    },
];

export const HowItWorksMobile: React.FC<HowItWorksSectionProps> = ({
    heading = `Over eight weekly sessions, MORE promotes neuroplasticity and lasting symptom change through a carefully designed, research-validated, three-step process.`,
    footerText = `MORE Research shows: As your prefrontal cortex grows, your cravings decrease and your capacity for joy increases.`,
    centerTitle = "Mindfulness",
    centerIconSrc = "/assets/images/HowItWorks/content-image-src.svg",
    steps = DEFAULT_STEPS,
}) => {
    return (
        <div className="w-full bg-white flex flex-col items-center py-16 px-4 box-border">
            <section className="w-full max-w-[420px] flex flex-col items-center text-center text-gray-900 font-sans">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-10 max-w-[340px]">
                    <h2 className="m-0 text-2xl tracking-[-0.02em] leading-snug font-bold">
                        {renderMoreHighlightedText(heading)}
                    </h2>
                </div>

                {/* Curved light background area */}
                <div className="w-full rounded-t-[999px] bg-[#f3f3f3]/60 px-4 pt-10 pb-14">
                    {/* Center icon bubble */}
                    <div className="mx-auto mb-8 flex flex-col items-center justify-center rounded-full bg-[#f3f3f3] border-8 border-white w-[170px] h-[170px] gap-2 shadow-sm">
                        <Image
                            className="w-[92px] h-[80px]"
                            width={92}
                            height={80}
                            alt={centerTitle}
                            src={centerIconSrc}
                        />
                        <h3 className="m-0 text-lg font-semibold text-primary-1">
                            {centerTitle}
                        </h3>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col items-center">
                        {steps.map((step, i) => (
                            <React.Fragment key={i}>
                                {/* Step pill */}
                                <div className="bg-white rounded-full px-8 py-3 shadow-sm border border-gray-100 min-w-[140px]">
                                    <span className="font-medium text-gray-900">{step.label}</span>
                                </div>

                                {/* Icon */}
                                <div className="mt-8 w-[124px] h-[124px] bg-[#f3f3f3] rounded-full flex items-center justify-center p-6">
                                    <Image
                                        src={step.icon}
                                        width={64}
                                        height={64}
                                        alt={step.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <div className="mt-4 text-sm font-bold text-gray-500">
                                    {renderMorePrefixedTitle(step.title)}
                                </div>

                                {/* Connector */}
                                {i < steps.length - 1 && (
                                    <div className="mt-6 mb-6 flex flex-col items-center">
                                        <div className="h-10 border-l-2 border-dashed border-gray-400" />
                                        <div className="mt-2 w-2.5 h-2.5 border-b-2 border-r-2 border-gray-400 rotate-45" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 max-w-[340px]">
                    <p className="m-0 text-2xl font-extrabold tracking-[-0.02em] leading-snug text-gray-700">
                        {renderMoreHighlightedText(footerText)}
                    </p>
                </div>
            </section>
        </div>
    );
};

// --- helpers ---

function renderMorePrefixedTitle(title: string) {
    const normalized = title.trim();
    const hasMorePrefix = normalized.toLowerCase().startsWith("more ");
    const remainder = hasMorePrefix ? normalized.slice(5) : normalized;

    return (
        <>
            <span className="text-primary-1">MORE</span>{" "}
            <span>{remainder}</span>
        </>
    );
}

function renderMoreHighlightedText(text: string) {
    const parts = text.split(/(MORE)/g);

    return (
        <>
            {parts.map((p, idx) =>
                p === "MORE" ? (
                    <span key={idx} className="text-primary-1">
                        MORE
                    </span>
                ) : (
                    <span key={idx}>{p}</span>
                )
            )}
        </>
    );
}