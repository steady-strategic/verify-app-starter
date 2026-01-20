import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { BlogHeroSectionProps } from "./types";

export const BlogHero: React.FC<BlogHeroSectionProps> = ({
    variant = "default",
    header,
    charts,
    cards,
    className = "",
    id,
}) => {
    return (
        <SectionWrapper id={id} className={` ${className}`} background="white">
            <div className="max-w-[1480px] mx-auto border border-dashed border-[#8a38f5] rounded-[5px] p-8 flex flex-col gap-12">
                {/* Header Section */}
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="font-serif text-[46px] font-extrabold tracking-[-0.92px] text-stone-900">
                        {header.title}
                    </h1>
                    <p className="font-sans text-[20px] font-normal text-stone-500">
                        {header.description}
                    </p>
                </div>

                {/* Blog Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full rounded-lg shadow-card overflow-hidden flex flex-col bg-white"
                        >
                            {/* Card Header */}
                            <div
                                className="h-[180px] relative flex items-end justify-start overflow-hidden bg-white px-8"
                            >
                                {charts[index] && (
                                    <img
                                        src={charts[index].src}
                                        alt={charts[index].alt}
                                        className="w-full h-[90%] object-contain object-bottom mb-[-10px]"
                                    />
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col gap-3 flex-1">
                                {/* Badge */}
                                <span
                                    className="inline-block font-sans text-[12px] font-medium text-white px-3 py-1 rounded w-fit"
                                    style={{ backgroundColor: card.tagColor }}
                                >
                                    {card.tag}
                                </span>

                                {/* Title */}
                                <h3 className="font-serif text-[20px] font-semibold tracking-[-0.40px] leading-[28px] text-stone-900 m-0">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-[16px] font-normal leading-[24px] text-stone-500 m-0">
                                    {card.description}
                                </p>

                                {/* Author Section */}
                                <div className="flex gap-3 items-start mt-auto pt-4">
                                    <img
                                        src={card.author.avatar}
                                        alt={card.author.name}
                                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <p className="font-sans text-[14px] font-medium text-stone-900 m-0">
                                            {card.author.name}
                                        </p>
                                        <p className="font-sans text-[14px] font-normal text-stone-500 m-0">
                                            {card.publishDate} · {card.readTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
