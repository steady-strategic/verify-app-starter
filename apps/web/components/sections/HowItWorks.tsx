import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { HowItWorksSectionProps } from "./types";

const steps = [
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

export const HowItWorks: React.FC<HowItWorksSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full bg-white flex flex-col items-center py-24 px-4 box-border ${className}`}
        >
            <section className="w-full max-w-7xl flex flex-col items-center relative text-center text-gray-900 font-sans">

                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-16 max-w-2xl z-10">
                    <h2 className="m-0 relative text-lg md:text-2xl tracking-[-0.02em] leading-relaxed font-bold">
                        <span>{`Over eight weekly sessions, `}</span>
                        <span className="text-primary-1">MORE</span>
                        <span>
                            {" "}
                            promotes neuroplasticity and lasting symptom change through a
                            carefully designed, research-validated, three-step process.
                        </span>
                    </h2>
                </div>

                {/* Central Graphic Area */}
                <div className="relative w-full max-w-[1280px] flex flex-col items-center mt-12 md:mt-24">

                    {/* Central Top Icon (Mindfulness) */}
                    <div className="relative z-10 mb-12 md:mb-0 md:absolute md:top-[-120px] left-1/2 transform md:-translate-x-1/2 flex flex-col items-center justify-center rounded-full bg-[#f3f3f3] border-8 border-white w-[206px] h-[206px] gap-2 shadow-sm">
                        <Image
                            className="w-[106px] h-[92px]"
                            width={106}
                            height={92}
                            alt="Mindfulness"
                            src="/assets/images/HowItWorks/content-image-src.svg"
                        />
                        <h3 className="m-0 text-xl font-semibold text-primary-1">Mindfulness</h3>
                    </div>

                    {/* Background Curve - Visible on desktop */}
                    <div className="hidden md:block w-full relative h-[400px]">
                        {/* Curve Image */}
                        <Image
                            className="absolute top-0 left-0 w-full h-[300px] object-contain object-top"
                            width={1280}
                            height={250}
                            alt=""
                            src="/assets/images/HowItWorks/Background2.svg"
                        />

                        {/* Steps Overlay */}
                        <div className="absolute top-[160px] w-full flex justify-center gap-[120px]">
                            {steps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center gap-6 w-[200px]">
                                    {/* Step Label Pill */}
                                    <div className="flex items-center justify-center bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 min-w-[140px] relative">
                                        <span className="font-medium text-gray-900 text-lg w-full text-center">{step.label}</span>
                                        {i < 2 && (
                                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-[148px] flex items-center">
                                                <div className="w-full border-t-2 border-dashed border-gray-600"></div>
                                                <div className="w-2 h-2 border-t-2 border-r-2 border-gray-600 transform rotate-45 -ml-1.5"></div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="w-[124px] h-[124px] bg-[#f3f3f3] rounded-full flex items-center justify-center p-6 mt-8">
                                        <Image
                                            src={step.icon}
                                            width={64}
                                            height={64}
                                            alt={step.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Step Title below Icon */}
                                    <div className="text-sm font-bold text-gray-500">
                                        <span className="text-primary-1">MORE</span> {step.title.replace('MORE ', '')}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dashed Lines (Manual placement to match curve) */}
                        {/* This part is tricky without precise SVG coordinates, relying on Step Pill arrows above or CSS borders */}

                    </div>

                    {/* Mobile View (Vertical Stack) */}
                    <div className="flex md:hidden flex-col gap-12 w-full">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="bg-white rounded-full px-6 py-2 shadow-sm border border-gray-100">
                                    <span className="font-medium text-gray-900">{step.label}</span>
                                </div>
                                <div className="w-[124px] h-[124px] bg-[#f3f3f3] rounded-full flex items-center justify-center p-6">
                                    <Image
                                        src={step.icon}
                                        width={64}
                                        height={64}
                                        alt={step.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-sm font-bold text-gray-500">
                                    <span className="text-primary-1">MORE</span> {step.title.replace('MORE ', '')}
                                </div>
                                {i < 2 && (
                                    <div className="h-8 border-l-2 border-dashed border-gray-300"></div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                {/* Footer Text */}
                <div className="mt-16 md:mt-24 max-w-2xl">
                    <b className="text-xl md:text-2xl tracking-[-0.02em] leading-relaxed text-gray-700">
                        MORE Research shows: As your prefrontal cortex grows, your cravings
                        decrease and your capacity for joy increases.
                    </b>
                </div>

            </section>
        </div>
    );
};
