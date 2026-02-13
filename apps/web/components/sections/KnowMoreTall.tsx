import React from "react";
import Image from "next/image";
import Link from "next/link";
import { KnowMoreTallSectionProps } from "./types";

export const KnowMoreTall: React.FC<KnowMoreTallSectionProps> = ({
    className = "",
    title,
    cta,
    backgroundImage,
    variant = "default"
}) => {
    const isPatients = variant === "patients";

    return (
        <div className={`w-full ${isPatients ? 'md:h-[653px]' : 'min-h-[550px]'} relative flex flex-col items-start justify-center py-24 px-6 md:px-20 box-border text-left overflow-hidden ${className}`}>
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                priority
            />
            {/* Overlay for better text readability if needed, standard is usually none or built into image */}

            <section className={`relative z-10 w-full max-w-[855px] flex flex-col ${isPatients ? 'items-start gap-10' : 'items-start gap-8'} font-sans text-white`}>
                <h2 className={`text-3xl md:text-[50px] font-extrabold tracking-[-0.02em] leading-[110%] text-left text-white`}>
                    {title}
                </h2>

                <Link
                    href={cta.href}
                    className="cursor-pointer py-3.5 px-6 bg-primary-1 rounded-md text-white border-none hover:bg-[#BA00B8] transition-colors inline-flex items-center justify-center"
                >
                    <span className="text-lg font-medium">
                        {cta.text}
                    </span>
                </Link>
            </section>
        </div>
    );
};
