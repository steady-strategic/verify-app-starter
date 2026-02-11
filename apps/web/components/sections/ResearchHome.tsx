import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { BaseSectionProps, ResearchHomeSectionProps } from "./types";

interface ListItem {
    percentage: string;
    description: string;
}

interface ItemProps {
    title: string;
    list: ListItem[];
}

const ResearchItem: React.FC<ItemProps> = ({ title, list }) => {
    return (
        <div className="flex flex-col items-start gap-4 flex-1 min-w-[300px] h-full">
            {/* Icon */}
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary-1 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 md:w-[14px] md:h-[10px]" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99992 7.58579L1.70703 4.29289L0.292816 5.70711L4.99992 10.4142L13.707 1.70711L12.2928 0.292893L4.99992 7.58579Z" fill="white" />
                </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 text-left min-h-[56px] leading-tight">
                {title}
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-3">
                {list.map((item, index) => (
                    <li key={index} className="flex items-start gap-1.5 text-left text-lg leading-snug">
                        <span className="font-bold text-primary-1 whitespace-nowrap">{item.percentage}</span>
                        <span className="text-gray-900">{item.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const items: ItemProps[] = [
    {
        title: "Dramatically reduces addiction and substance use",
        list: [
            { percentage: "50%", description: "reduction in craving" },
            { percentage: "59%", description: "reduction in treatment dropout" },
            { percentage: "42%", description: "reduction in drug relapse" },
        ]
    },
    {
        title: "Clinically significant pain relief for therapy recipients",
        list: [
            { percentage: "30%", description: "reduction in acute pain" },
            { percentage: "45%", description: "reduction in post-operative pain" },
            { percentage: "59%", description: "success rate in treating chronic pain" },
        ]
    },
    {
        title: "Measurable improvements in emotional well-being",
        list: [
            { percentage: "43%", description: "reduction in anxiety" },
            { percentage: "38%", description: "improvement in depression" },
            { percentage: "59%", description: "success rate in treating PTSD" },
        ]
    },
];

export const ResearchHome: React.FC<ResearchHomeSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full min-h-[683px] bg-white flex flex-col items-center pt-[90px] px-4 pb-[59px] box-border ${className}`}
        >
            <section className="flex flex-col items-center gap-[60px] text-center text-[28px] text-gray-900 font-sans w-full max-w-7xl">
                <div className="w-full flex flex-col items-center justify-center">
                    <h3 className="m-[0px] max-w-[800px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] inline-block">
                        <span>{`Backed by $90M in federal research grants and 16+ clinical trials, `}</span>
                        <span className="text-primary-1">MORE</span>
                        <span> is proven to be 3x as effective as standard therapy</span>
                    </h3>
                </div>
                <section className="w-full flex flex-wrap justify-between items-start gap-8 desktop:gap-4 self-stretch">
                    {items.map((item, index) => (
                        <ResearchItem
                            key={index}
                            title={item.title}
                            list={item.list}
                        />
                    ))}
                </section>
                <button className="cursor-pointer [border:none] py-35 px-6 bg-primary-1 w-[206px] h-[53px] rounded-md overflow-hidden shrink-0 flex items-center justify-center box-border gap-2">
                    <Image
                        className="h-4 w-4 relative hidden shrink-0"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/ResearchHome/cart-plus1.svg"
                    />
                    <b className="relative text-lg leading-[150%] font-sans text-white text-left shrink-0">
                        Read the Research
                    </b>
                    <Image
                        className="h-4 w-4 relative hidden shrink-0"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/ResearchHome/cart-plus1.svg"
                    />
                </button>
            </section>
        </div>
    );
};
