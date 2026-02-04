import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { TestimonialsSectionProps } from "./types";

export const Testimonials: React.FC<TestimonialsSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full bg-white flex flex-col items-center py-24 px-4 box-border ${className}`}
        >
            <section className="w-full max-w-7xl flex flex-col items-center gap-7 text-center text-[28px] text-gray-900 font-sans">
                <div className="flex flex-col items-center gap-4 max-w-2xl">
                    <h1 className="m-[0px] w-full relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] flex items-center justify-center">
                        Testimonials
                    </h1>
                    <div className="w-full relative text-lg leading-[150%] text-gray-700 flex items-center justify-center">
                        Hear from clinicians who use MORE in their practice
                    </div>
                </div>
                <section className="w-full max-w-6xl flex flex-col items-center gap-8 text-center text-xl text-gray-900 font-sans">
                    <div className="self-stretch flex flex-col items-center">
                        <div className="w-full max-w-3xl relative tracking-[-0.02em] leading-[140%] font-semibold inline-block">
                            “This is an intervention that has demonstrated both during
                            in-person and virtual settings a level of healing that I have not
                            seen in any other treatment approach I have provided.”
                        </div>
                    </div>
                    <div className="self-stretch flex flex-wrap items-center justify-center gap-4 text-left text-base">
                        <Image
                            className="h-6 w-6 relative rounded-full object-cover hidden shrink-0"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/assets/images/Testimonials/Avatar4@2x.png"
                        />
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <div className="relative leading-[125%] font-semibold">
                                Trish Dooley Budsock, MA, LPC
                            </div>
                            <div className="relative leading-[125%] font-semibold hidden md:block">/</div>
                            <div className="relative text-sm leading-[125%] text-gray-500">
                                Robert Wood Johnson Medical School at Rutgers
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex items-start justify-center gap-6">
                        <button className="cursor-pointer border-none bg-transparent p-0 hover:opacity-70 transition-opacity">
                            <Image
                                className="h-5 w-5 relative"
                                width={20}
                                height={20}
                                sizes="100vw"
                                alt="Previous"
                                src="/assets/images/Testimonials/arrow-left-outline.svg"
                            />
                        </button>
                        <button className="cursor-pointer border-none bg-transparent p-0 hover:opacity-70 transition-opacity">
                            <Image
                                className="h-5 w-5 relative"
                                width={20}
                                height={20}
                                sizes="100vw"
                                alt="Next"
                                src="/assets/images/Testimonials/arrow-right-outline1.svg"
                            />
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
};
