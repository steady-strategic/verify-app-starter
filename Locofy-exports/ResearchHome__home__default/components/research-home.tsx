"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Item2 from "./item2";

export type ResearchHomeType = {
  className?: string;
};

const ResearchHome: NextPage<ResearchHomeType> = ({ className = "" }) => {
  const [item2Items] = useState([
    {
      contentWidth: "395px" as const,
      contentAlignSelf: undefined,
      title: "Dramatically reduces addiction and substance use\n",
      titleAlignSelf: "stretch" as const,
      titleWidth: undefined,
      titleDisplay: undefined,
    },
    {
      contentWidth: "unset" as const,
      contentAlignSelf: "stretch" as const,
      title: "Clinically significant pain relief\n\n",
      titleAlignSelf: undefined,
      titleWidth: undefined,
      titleDisplay: undefined,
    },
    {
      contentWidth: undefined,
      contentAlignSelf: undefined,
      title: "Measurable improvements in emotional well-being\n",
      titleAlignSelf: "unset" as const,
      titleWidth: "395px" as const,
      titleDisplay: "inline-block" as const,
    },
  ]);
  return (
    <div
      className={`w-[1440px] h-[683px] bg-white max-w-full overflow-hidden flex flex-col items-center pt-[90px] px-[0px] pb-[59px] box-border ${className}`}
    >
      <section className="flex flex-col items-center gap-[60px] text-center text-[28px] text-gray-900 font-[Inter]">
        <div className="w-[1280px] flex flex-col items-center justify-center">
          <h3 className="m-[0px] w-[636px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] inline-block">
            <span>{`Backed by $90M in federal research grants and 16+ clinical trials, `}</span>
            <span className="text-primary-1">MORE</span>
            <span> is proven to be 3x as effective as standard therapy</span>
          </h3>
        </div>
        <section className="w-[1280px] h-[245px] flex items-center gap-[48px]">
          {item2Items.map((item, index) => (
            <Item2
              key={index}
              contentWidth={item.contentWidth}
              contentAlignSelf={item.contentAlignSelf}
              title={item.title}
              titleAlignSelf={item.titleAlignSelf}
              titleWidth={item.titleWidth}
              titleDisplay={item.titleDisplay}
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
            src="/cart-plus1.svg"
          />
          <b className="relative text-lg leading-[150%] font-[Inter] text-white text-left shrink-0">
            Read the Research
          </b>
          <Image
            className="h-4 w-4 relative hidden shrink-0"
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src="/cart-plus1.svg"
          />
        </button>
      </section>
    </div>
  );
};

export default ResearchHome;
