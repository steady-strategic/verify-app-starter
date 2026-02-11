import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { HeroSectionProps } from "./types";
import { TypingAnimation } from "../ui/TypingAnimation";

export const Hero: React.FC<HeroSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full min-h-screen md:min-h-[899px] flex items-center justify-center pt-32 md:pt-[200px] pb-12 md:pb-[51px] box-border relative isolate bg-[#040404] ${className}`}
        >
            <Image
                className="w-full absolute !m-0 h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[0] shrink-0"
                width={1440}
                height={899}
                sizes="100vw"
                alt=""
                src="/assets/images/Hero/content-hero-bg-src@2x.png"
                priority
            />
            <main className="w-full max-w-[1061px] px-6 md:px-0 flex flex-col items-center gap-32 md:gap-[170px] z-[1] shrink-0">
                <section className="self-stretch h-auto md:h-[369px] flex flex-col items-center gap-6 md:gap-[22px] text-center text-4xl md:text-[85px] text-white font-sans">
                    <div className="self-stretch flex items-center justify-center shrink-0">
                        <h1 className="m-[0px] relative text-[length:inherit] tracking-[-0.02em] leading-[130%] font-extrabold font-[inherit]">
                            <span className="text-white">{`Get `}</span>
                            <span className="text-primary-1">MORE</span>
                            <span className="text-white"> out of therapy</span>
                        </h1>
                    </div>
                    <div className="h-auto md:h-[70px] min-h-[40px] shrink-0 flex items-center justify-center relative font-light text-white text-4xl md:text-[64px]">
                        <TypingAnimation
                            phrases={["More joy", "More healing", "More freedom", "More purpose", "More out of life"]}
                            typingSpeed={100}
                            pauseTime={1500}
                            className="text-white"
                            cursorClassName="border-primary-1"
                            WrapperTag="h2"
                        />
                    </div>
                    <div className="flex items-center justify-center py-2.5 px-[0px] shrink-0 text-lg md:text-[28px]">
                        <div className="w-2/3 md:w-full max-w-[562px] relative tracking-[-0.02em] leading-[125%] font-medium inline-block shrink-0 text-white">
                            Breakthrough evidence-based therapy for addiction, pain, and
                            emotional distress
                        </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-3 md:py-3.5 px-5 md:px-6 bg-primary-1 w-[140px] md:w-[156px] h-[48px] md:h-[53px] rounded-md overflow-hidden shrink-0 flex items-center justify-center box-border gap-2">
                        <div className="h-4 w-4 relative overflow-hidden shrink-0 hidden">
                            <Image
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full hidden"
                                width={16}
                                height={16}
                                sizes="100vw"
                                alt=""
                                src="/assets/images/Hero/cart-plus1.svg"
                            />
                        </div>
                        <b className="relative text-base md:text-lg leading-[150%] font-sans text-white text-left shrink-0">
                            Get Certified
                        </b>
                        <Image
                            className="h-4 w-4 relative hidden shrink-0"
                            width={16}
                            height={16}
                            sizes="100vw"
                            alt=""
                            src="/assets/images/Hero/cart-plus1.svg"
                        />
                    </button>
                </section>
                <section className="self-stretch h-auto grid grid-cols-2 md:flex md:flex-row items-center justify-center justify-items-center gap-12 md:gap-[127px] text-center text-3xl md:text-[50px] font-sans pb-10 md:pb-0">
                    <div className="w-auto md:w-[170px] flex flex-col items-center gap-[8px]">
                        <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] text-primary-1">
                            3X
                        </h2>
                        <div className="self-stretch relative text-base md:text-lg leading-[125%] text-white">
                            As effective as standard therapy
                        </div>
                    </div>
                    <div className="w-auto md:w-[170px] flex flex-col items-center gap-[8px]">
                        <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] text-primary-1">
                            42%
                        </h2>
                        <div className="self-stretch relative text-base md:text-lg leading-[125%] text-white">
                            Reduction in drug relapse
                        </div>
                    </div>
                    <div className="w-auto md:w-[170px] flex flex-col items-center gap-[8px]">
                        <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] text-primary-1">
                            50%
                        </h2>
                        <div className="self-stretch relative text-base md:text-lg leading-[125%] text-white">
                            Reduction in cravings
                        </div>
                    </div>
                    <div className="w-auto md:w-[170px] flex flex-col items-center gap-[8px]">
                        <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] text-primary-1">
                            30%
                        </h2>
                        <div className="self-stretch relative text-base md:text-lg leading-[125%] text-white">
                            Reduction in <br className="hidden md:block" />
                            pain
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
