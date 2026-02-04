import React from "react";
import Image from "next/image";
import Link from "next/link";
import { KnowMoreTallSectionProps } from "./types";

export const KnowMoreTall: React.FC<KnowMoreTallSectionProps> = ({
    className = "",
    title,
    cta,
    backgroundImage
}) => {
    return (
        <div className={`w-full min-h-[550px] relative flex flex-col items-center justify-center py-24 px-6 md:px-20 box-border text-center overflow-hidden ${className}`}>
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                priority
            />
            {/* Overlay for better text readability if needed, standard is usually none or built into image */}

            <section className="relative z-10 w-full max-w-[855px] flex flex-col items-start md:items-center text-white gap-8 font-sans">
                <h2 className="text-3xl md:text-[50px] font-extrabold tracking-[-0.02em] leading-[110%] text-left md:text-center">
                    {title}
                </h2>

                <Link
                    href={cta.href}
                    className="cursor-pointer py-3.5 px-6 bg-primary-1 rounded-md text-white border-none hover:bg-primary-1/90 transition-colors inline-flex items-center justify-center"
                >
                    <span className="text-lg font-medium">
                        {cta.text}
                    </span>
                </Link>
            </section>
        </div>
    );
};
