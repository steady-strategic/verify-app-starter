import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentSectionProps } from "./types";

const ThumbsUpIcon = () => (
    <div className="w-4 h-4 rounded-full bg-primary-1 flex items-center justify-center shrink-0">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-[-0.5px]">
            <g clipPath="url(#clip0_145_9)">
                <path d="M1.68828 2.90931H0.422069C0.31013 2.90931 0.202775 2.95108 0.123621 3.02543C0.0444679 3.09978 0 3.20062 0 3.30577V6.87391C0 7.0842 0.0889357 7.28589 0.247242 7.43459C0.405549 7.58329 0.620259 7.66683 0.844138 7.66683H1.26621C1.49009 7.66683 1.7048 7.58329 1.8631 7.43459C2.02141 7.28589 2.11035 7.0842 2.11035 6.87391V3.30577C2.11035 3.20062 2.06588 3.09978 1.98672 3.02543C1.90757 2.95108 1.80022 2.90931 1.68828 2.90931Z" fill="white" />
                <path d="M7.15576 2.90931H5.4869L6.14448 1.12524C6.16606 0.961985 6.12617 0.796783 6.03172 0.658249C5.93727 0.519714 5.79421 0.416572 5.62732 0.366687C5.46044 0.316802 5.28023 0.323316 5.11792 0.3851C4.9556 0.446885 4.82141 0.560049 4.73857 0.704992C4.25073 1.48703 3.65038 2.20211 2.95448 2.83002V6.63048H3.0026C3.89274 6.86162 5.07116 7.27037 6.16221 7.27037C6.75311 7.27037 6.83414 7.06183 6.9557 6.74823L7.94925 3.97301C7.99558 3.85323 8.0105 3.72473 7.99273 3.59838C7.97496 3.47204 7.92503 3.35158 7.84718 3.24721C7.76932 3.14284 7.66583 3.05764 7.54547 2.99882C7.42511 2.94 7.29144 2.90929 7.15576 2.90931Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_145_9">
                    <rect width="8" height="8" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </div>
);

export const Content: React.FC<ContentSectionProps> = ({
    className = "",
    title,
    subtitle,
    items,
    image,
    cta,
    variant
}) => {
    const isSimpleVariant = variant === "simple";

    return (
        <div
            className={`w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col md:flex-row ${isSimpleVariant ? 'md:flex-row-reverse' : ''} items-center justify-between py-24 px-6 md:px-20 gap-12 ${className}`}
        >
            <div className="w-full md:w-[610px] relative h-[400px] md:h-[530px] shrink-0">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-3xl object-cover"
                    sizes="(max-width: 768px) 100vw, 610px"
                />
            </div>

            <section className="w-full md:w-[606px] flex flex-col items-start gap-8 text-left text-gray-900 font-sans">
                <div className="flex flex-col gap-4">
                    <h2 className={`text-2xl md:text-[28px] font-sans font-bold tracking-[-0.02em] leading-[125%] m-0 ${isSimpleVariant ? 'text-primary-1' : ''}`}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl tracking-[-0.02em] leading-[140%] font-semibold text-gray-700 m-0">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="w-full border-t border-gray-200">
                    <ul className="flex flex-col gap-6 mt-8">
                        {items.map((item, index) => (
                            <li key={index} className="flex gap-4 items-start text-lg leading-[150%]">
                                <span className="shrink-0 mt-1"><ThumbsUpIcon /></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {cta && (
                    <Link
                        href={cta.href}
                        className="cursor-pointer border border-gray-200 py-3 px-5 bg-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-sm font-medium text-gray-900">
                            {cta.text.split(/(MORE)/g).map((part, index) =>
                                part === 'MORE' ? (
                                    <span key={index} className="text-primary-1">MORE</span>
                                ) : (
                                    <span key={index}>{part}</span>
                                )
                            )}
                        </span>
                    </Link>
                )}
            </section>
        </div >
    );
};
