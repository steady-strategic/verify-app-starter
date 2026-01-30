import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ClinicianCardSectionProps } from "./types";

export const ClinicianCard: React.FC<ClinicianCardSectionProps> = ({
    clinician,
    variant = "default",
    className = "",
    id,
}) => {
    return (
        <section className={`flex justify-center items-center py-16 px-4 ${className}`} id={id}>
            <div
                className="flex flex-col bg-white rounded-lg w-full max-w-[592px] p-0"
                style={{
                    boxShadow: "0px 0px 9.9px rgba(0, 0, 0, 0.03)",
                }}
            >
                {/* Name */}
                <div className="p-6 pb-4">
                    <h3 className="text-[#111928] text-[28px] font-bold tracking-[-0.56px] leading-[1.2] font-sans">
                        {clinician.name}
                    </h3>
                </div>

                {/* Separator 1 */}
                <div className="h-[1px] w-full bg-gray-100"></div>

                {/* Body Content */}
                <div className="flex flex-col gap-[6px] p-6 text-[#111928]">
                    {/* Phone */}
                    <p className="text-[18px] font-normal leading-relaxed font-sans">
                        Phone: {clinician.phone}
                    </p>

                    {/* Training Level */}
                    <p className="text-[18px] font-normal leading-relaxed font-sans">
                        Level of Training: {clinician.trainingLevel}
                    </p>

                    {/* City */}
                    <p className="text-[18px] font-normal leading-relaxed font-sans">
                        City: {clinician.city}
                    </p>

                    {/* State */}
                    <p className="text-[18px] font-normal leading-relaxed font-sans">
                        State: {clinician.state}
                    </p>
                </div>

                {/* Separator 2 */}
                <div className="h-[1px] w-full bg-gray-100"></div>

                {/* Button Container */}
                <div className="p-6 pt-4 flex justify-center">
                    <Link
                        href={clinician.contactUrl || "#"}
                        className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg w-[116px] h-[41px] hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-[#111928] text-[14px] font-medium leading-relaxed font-sans">
                            Contact
                        </span>
                        <Image
                            src="/assets/images/arrow-icon.svg"
                            alt="Arrow"
                            width={11}
                            height={7}
                            className="text-[#1f2a37]"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};
