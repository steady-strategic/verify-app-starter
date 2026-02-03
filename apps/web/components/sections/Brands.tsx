import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { BaseSectionProps, BrandsSectionProps } from "./types";

export const Brands: React.FC<BrandsSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full h-[226.4px] bg-[#efefef] flex items-center justify-center box-border ${className}`}
        >
            <section className="flex items-center justify-center gap-[60px] flex-wrap px-4">
                <Image
                    className="w-[216px] relative max-h-full object-cover"
                    loading="lazy"
                    width={216}
                    height={121}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/Brands/Johns-Hopkins-University-Logo-1@2x.png"
                />
                <Image
                    className="w-[243px] relative max-h-full object-cover"
                    loading="lazy"
                    width={243}
                    height={80}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/Brands/hms-logo-final-rgb-1@2x.png"
                />
                <Image
                    className="w-44 relative max-h-full object-cover"
                    loading="lazy"
                    width={176}
                    height={34.4}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/Brands/University-of-California-San-Diego-logo-svg-2@2x.png"
                />
                <Image
                    className="w-[113px] relative max-h-full object-cover"
                    loading="lazy"
                    width={113}
                    height={97}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/Brands/pngegg-1@2x.png"
                />
                <Image
                    className="w-[252px] relative max-h-full object-cover"
                    loading="lazy"
                    width={252}
                    height={86}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/Brands/kaiser-permanente-eastmoreland-dental-office-kaiser-westside-medical-center-health-insurance-health-care-others-d924d53548165cd067655983122df683-1@2x.png"
                />
            </section>
        </div>
    );
};
