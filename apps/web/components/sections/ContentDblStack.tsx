import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentDblStackSectionProps } from "./types";

export const ContentDblStack: React.FC<ContentDblStackSectionProps> = ({
    items,
    variant = "default",
    className = "",
    id,
}) => {
    return (
        <section
            className={`flex flex-col gap-[96px] w-full max-w-[1280px] mx-auto px-5 py-16 ${className}`}
            id={id}
        >
            {items.map((item, index) => {
                const isReverse = item.reverse ?? (index % 2 !== 0);

                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row gap-[64px] items-stretch w-full ${isReverse ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Content Side */}
                        <div className="flex flex-col gap-[32px] flex-1 w-full justify-center">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-sans text-[28px] font-bold leading-[35px] tracking-[-0.56px] text-[#111928]"
                                    dangerouslySetInnerHTML={{ __html: item.heading }}
                                />
                                <div className="font-sans text-[20px] font-normal leading-[28px] tracking-[-0.40px] text-[#374151]"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            </div>

                            <div className="w-full h-[1px] bg-[#e5e7eb]" />

                            <div className="flex flex-col gap-[24px]">
                                {item.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex gap-[10px] items-start">
                                        <div className="w-[24px] h-[24px] rounded-full bg-[#D80ADA] flex items-center justify-center flex-shrink-0 mt-[1.5px]">
                                            <div className="w-[10px] h-[10px] relative">
                                                <Image
                                                    src="/assets/images/checkmark-bullet.svg"
                                                    alt="bullet"
                                                    fill
                                                    className="object-contain"
                                                    style={{ filter: "brightness(0) invert(1)" }}
                                                />
                                            </div>
                                        </div>
                                        <p className="font-inter text-[18px] font-normal text-[#111928] leading-[27px]">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {item.cta && (
                                <Link
                                    href={item.cta.href}
                                    className="font-inter text-[14px] font-medium text-[#111928] hover:text-[#d80ada] transition-colors mt-2"
                                >
                                    {item.cta.text} &rarr;
                                </Link>
                            )}
                        </div>

                        {/* Image Side */}
                        <div className="flex-1 w-full">
                            <div className="relative w-full h-[400px] md:h-full min-h-[400px] rounded-[12px] overflow-hidden">
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
