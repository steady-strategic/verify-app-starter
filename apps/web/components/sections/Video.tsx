import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { VideoSectionProps } from "./types";

export const Video: React.FC<VideoSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full min-h-[856px] relative flex flex-col items-center py-16 px-4 md:px-20 box-border overflow-hidden ${className}`}
        >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                width={1440}
                height={856}
                sizes="100vw"
                alt=""
                src="/assets/images/Video/Background1@2x.png"
            />

            <div className="relative z-[1] w-full max-w-7xl flex flex-col items-center gap-12 text-center text-white">
                <div className="flex flex-col items-center gap-4 max-w-3xl">
                    <h1 className="m-[0px] w-full relative text-3xl md:text-[50px] tracking-[-0.02em] leading-[110%] font-extrabold font-sans">
                        See MORE in action
                    </h1>
                    <div className="relative text-lg md:text-xl tracking-[-0.02em] leading-[140%] font-semibold font-sans">
                        Learn how MORE targets the brain's reward processes to restore
                        responsiveness to natural pleasure and reduce opioid cravings.
                    </div>
                </div>

                <div className="w-full max-w-[1020px] aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 1020px"
                        alt="MORE in action video thumbnail"
                        src="/assets/images/Video/Video@2x.png"
                    />
                    {/* Play button overlay could go here if functionality is added later */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
