"use client";
import type { NextPage } from "next";
import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Icon from "./icon";

export type HowItWorksType = {
  className?: string;
  icon1Contenticon0imagesrc: string;
  icon2Contenticon0imagesrc: string;
  icon3Contenticon0imagesrc: string;
  icon1Icon1Width?: CSSProperties["width"];
  icon2Icon1Width?: CSSProperties["width"];
  icon3Icon1Width?: CSSProperties["width"];
  iconContenticonimagesrcWidth?: CSSProperties["width"];
  iconContenticonimagesrcWidth1?: CSSProperties["width"];
  iconContenticonimagesrcWidth2?: CSSProperties["width"];
  iconContenticonimagesrcLeft?: CSSProperties["left"];
  iconContenticonimagesrcLeft1?: CSSProperties["left"];
  iconContenticonimagesrcLeft2?: CSSProperties["left"];
  iconContenticonimagesrcHeight?: CSSProperties["height"];
  iconContenticonimagesrcHeight1?: CSSProperties["height"];
  iconContenticonimagesrcHeight2?: CSSProperties["height"];
};

const HowItWorks: NextPage<HowItWorksType> = ({
  className = "",
  icon1Contenticon0imagesrc,
  icon2Contenticon0imagesrc,
  icon3Contenticon0imagesrc,
  icon1Icon1Width,
  icon2Icon1Width,
  icon3Icon1Width,
  iconContenticonimagesrcWidth,
  iconContenticonimagesrcWidth1,
  iconContenticonimagesrcWidth2,
  iconContenticonimagesrcLeft,
  iconContenticonimagesrcLeft1,
  iconContenticonimagesrcLeft2,
  iconContenticonimagesrcHeight,
  iconContenticonimagesrcHeight1,
  iconContenticonimagesrcHeight2,
}) => {
  const [iconItems] = useState([
    {
      icon1Width: "147px" as const,
      contenticon0imagesrc: icon1Contenticon0imagesrc,
      contenticon0imagesrcWidth: "56px" as const,
      contenticon0imagesrcLeft: "46.5px" as const,
      contenticon0imagesrcHeight: "70px" as const,
    },
    {
      icon1Width: "143px" as const,
      contenticon0imagesrc: icon2Contenticon0imagesrc,
      contenticon0imagesrcWidth: "62px" as const,
      contenticon0imagesrcLeft: "43px" as const,
      contenticon0imagesrcHeight: "66px" as const,
    },
    {
      icon1Width: "120px" as const,
      contenticon0imagesrc: icon3Contenticon0imagesrc,
      contenticon0imagesrcWidth: "70px" as const,
      contenticon0imagesrcLeft: "27px" as const,
      contenticon0imagesrcHeight: undefined,
    },
  ]);
  return (
    <div
      className={`w-[1440px] max-w-full flex flex-col items-start ${className}`}
    >
      <section className="w-[1440px] h-[987px] relative bg-white text-center text-2xl text-paragraph font-[Inter]">
        <Image
          className="absolute top-[394px] left-[80px] w-[1280px] h-[250px]"
          width={1280}
          height={250}
          sizes="100vw"
          alt=""
          src="/Background2.svg"
        />
        <div className="absolute top-[816px] left-[459px] flex items-center justify-center">
          <b className="w-[522px] relative tracking-[-0.02em] leading-[120%] flex items-center justify-center shrink-0">
            MORE Research shows: As your prefrontal cortex grows, your cravings
            decrease and your capacity for joy increases.
          </b>
        </div>
        <section className="absolute top-[592px] left-[350px] flex items-end gap-[164px]">
          {iconItems.map((item, index) => (
            <Icon
              key={index}
              icon1Width={item.icon1Width}
              contenticon0imagesrc={item.contenticon0imagesrc}
              contenticon0imagesrcWidth={item.contenticon0imagesrcWidth}
              contenticon0imagesrcLeft={item.contenticon0imagesrcLeft}
              contenticon0imagesrcHeight={item.contenticon0imagesrcHeight}
            />
          ))}
        </section>
        <div className="absolute top-[494px] left-[351px] flex items-center gap-[16px] text-lg">
          <div className="flex items-center relative isolate gap-[24px]">
            <div className="h-11 w-[132px] relative shadow-[0px_0px_9.9px_rgba(0,_0,_0,_0.03)] rounded-[23px] bg-white z-[0]" />
            <Image
              className="h-[14.7px] w-[137px] relative max-h-full z-[1]"
              width={137}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-1.svg"
            />
            <div className="h-[25px] w-[52px] absolute !!m-[0 important] top-[9px] left-[40px] tracking-[-0.02em] leading-[140%] font-medium inline-block z-[2]">
              Step 1
            </div>
          </div>
          <div className="flex items-center relative isolate gap-[11px]">
            <div className="h-11 w-[132px] relative shadow-[0px_0px_9.9px_rgba(0,_0,_0,_0.03)] rounded-[23px] bg-white z-[0]" />
            <Image
              className="h-[14.7px] w-[137px] relative max-h-full z-[1]"
              width={137}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-1.svg"
            />
            <div className="h-[25px] w-[54px] absolute !!m-[0 important] top-[9px] left-[39px] tracking-[-0.02em] leading-[140%] font-medium inline-block z-[2]">
              Step 2
            </div>
          </div>
          <div className="h-11 w-[132px] shadow-[0px_0px_9.9px_rgba(0,_0,_0,_0.03)] rounded-[23px] bg-white flex items-center justify-center py-[9px] px-[38px] box-border">
            <div className="relative tracking-[-0.02em] leading-[140%] font-medium">
              Step 3
            </div>
          </div>
        </div>
        <div className="absolute top-[260px] left-[617px] rounded-[95px] bg-[#f3f3f3] border-white border-solid border-[8px] box-border w-[206px] h-[206px] flex flex-col items-center py-[32px] px-[34px] gap-0.5 text-xl text-primary-1">
          <Image
            className="w-[106px] h-[92px] relative"
            loading="lazy"
            width={106}
            height={92}
            sizes="100vw"
            alt=""
            src="/content-image-src.svg"
          />
          <h3 className="m-[0px] relative text-[length:inherit] leading-[150%] font-semibold font-[inherit]">
            Mindfulness
          </h3>
        </div>
        <div className="absolute top-[74px] left-[392px] flex items-center justify-center text-[28px] text-gray-900">
          <h2 className="m-[0px] w-[660px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] flex items-center shrink-0">
            <span className="w-full">
              <span>{`Over eight weekly sessions, `}</span>
              <span className="text-primary-1">MORE</span>
              <span>
                {" "}
                promotes neuroplasticity and lasting symptom change through a
                carefully designed, research-validated, three-step process.
              </span>
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
