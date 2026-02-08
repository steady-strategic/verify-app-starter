import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogHomeSectionProps } from "./types";

export const BlogHome: React.FC<BlogHomeSectionProps> = ({
    className = "",
    title,
    items
}) => {
    // Helper to highlight "MORE" in primary-1 color
    const renderText = (text: string) => {
        return text.split(/(MORE)/g).map((part, index) =>
            part === 'MORE' ? (
                <span key={index} className="text-primary-1">MORE</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    return (
        <section className={`w-full py-24 px-4 md:px-20 bg-white ${className}`}>
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-4xl md:text-[50px] font-bold text-center text-gray-900 mb-16 tracking-tight">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                />
                            </div>

                            <div className="flex flex-col items-start flex-grow">
                                <span className="inline-block px-3 py-1.5 bg-[#AC94FA] text-white text-xs font-semibold rounded mb-4">
                                    {item.category}
                                </span>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {renderText(item.title)}
                                </h3>

                                <p className="text-gray-600 text-base leading-relaxed line-clamp-4">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
