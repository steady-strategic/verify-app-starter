import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { BaseSectionProps, AboutHomeSectionProps } from "./types";

export const AboutHome: React.FC<AboutHomeSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full bg-white flex flex-wrap items-center justify-center py-[120px] px-4 lg:px-20 box-border gap-20 ${className}`}
        >
            <Image
                className="h-[318px] w-[318px] object-cover"
                loading="lazy"
                width={318}
                height={318}
                sizes="100vw"
                alt=""
                src="/assets/images/AboutHome/Left-Image1@2x.png"
            />
            <section className="w-full max-w-2xl flex flex-col items-start gap-[25.5px] text-left text-[28px] text-primary-1 font-sans">
                <h1 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-[inherit]">
                    <span className="text-primary-1">
                        <span className="font-extrabold font-sans">MORE:</span>
                        <span>
                            {" "}
                            Mindfulness-Oriented Recovery Enhancement
                            <br />
                        </span>
                    </span>
                    <b className="text-gray-900">
                        A Therapy Based on Science and Lasting Outcomes
                    </b>
                </h1>
                <div className="w-full relative text-lg leading-[150%] text-gray-700 inline-block">
                    Designed by Dr. Eric Garland, PhD, LCSW, Endowed Professor in Health
                    Sciences at the University of California San Diego, Director of UCSD’s
                    ONEMIND and leading expert on the use of mind-body therapies. Having
                    authored 280+ scientific articles, Dr. Garland is the world’s most
                    prolific author of mindfulness research.
                    <br />
                    <br />
                </div>
                <div className="w-full flex items-center justify-center md:justify-start">
                    <button className="cursor-pointer border-gray-200 border-solid border-[1px] py-2.5 px-5 bg-white rounded-lg overflow-hidden flex items-center justify-center gap-2">
                        <Image
                            className="h-3.5 w-3.5 relative hidden"
                            width={14}
                            height={14}
                            sizes="100vw"
                            alt=""
                            src="/assets/images/AboutHome/arrow-narrow-right2.svg"
                        />
                        <div className="relative text-sm leading-[150%] font-medium font-sans text-gray-900 text-left">
                            Read MORE Insights From Dr. Garland
                        </div>
                        <Image
                            className="h-3.5 w-3.5 relative hidden"
                            width={14}
                            height={14}
                            sizes="100vw"
                            alt=""
                            src="/assets/images/AboutHome/arrow-right-outline.svg"
                        />
                    </button>
                </div>
            </section>
        </div>
    );
};
