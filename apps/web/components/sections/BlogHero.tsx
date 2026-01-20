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
                    <h1 className="font-inter text-[46px] font-extrabold tracking-[-0.92px] text-[#111928]">
                        {header.title}
                    </h1>
                    <p className="font-inter text-[20px] font-normal text-[#6b7280]">
                        {header.description}
                    </p>
                </div>

                {/* Charts Row */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    {charts.map((chart, index) => (
                        <img
                            key={index}
                            src={chart.src}
                            alt={chart.alt}
                            className="w-full md:w-[358px] h-auto md:h-[200px] object-contain"
                        />
                    ))}
                </div>

                {/* Blog Cards Container */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[405px] rounded-lg shadow-[0px_0px_9.4px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col bg-white"
                        >
                            {/* Card Header */}
                            <div
                                className="h-[180px]"
                                style={{ background: card.headerGradient }}
                            ></div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col gap-3 flex-1">
                                {/* Badge */}
                                <span
                                    className="inline-block font-inter text-[12px] font-medium text-white px-3 py-1 rounded w-fit"
                                    style={{ backgroundColor: card.tagColor }}
                                >
                                    {card.tag}
                                </span>

                                {/* Title */}
                                <h3 className="font-inter text-[20px] font-semibold tracking-[-0.40px] leading-[28px] text-[#111928] m-0">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="font-inter text-[16px] font-normal leading-[24px] text-[#6b7280] m-0">
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
                                        <p className="font-inter text-[14px] font-medium text-[#111928] m-0">
                                            {card.author.name}
                                        </p>
                                        <p className="font-inter text-[14px] font-normal text-[#6b7280] m-0">
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
