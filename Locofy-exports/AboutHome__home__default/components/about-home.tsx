import type { NextPage } from "next";
import Image from "next/image";

export type AboutHomeType = {
  className?: string;
};

const AboutHome: NextPage<AboutHomeType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex items-start justify-between py-[120px] px-44 box-border gap-[20px] ${className}`}
    >
      <Image
        className="h-[318px] w-[318px] object-cover"
        loading="lazy"
        width={318}
        height={318}
        sizes="100vw"
        alt=""
        src="/Left-Image1@2x.png"
      />
      <section className="w-[695px] flex flex-col items-start gap-[25.5px] text-left text-[28px] text-primary-1 font-[Inter]">
        <h1 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-[inherit]">
          <span>
            <span className="font-extrabold font-[Inter]">MORE:</span>
            <span>
              {" "}
              Mindfulness-Oriented Recovery Enhancement
              <br />
            </span>
          </span>
          <b className="text-gray-900">
            A Therapy Based on Science and Lasting Outcomes
          </b>
        </h1>
        <div className="w-[640px] h-[162px] relative text-lg leading-[150%] text-gray-700 inline-block">
          Designed by Dr. Eric Garland, PhD, LCSW, Endowed Professor in Health
          Sciences at the University of California San Diego, Director of UCSD’s
          ONEMIND and leading expert on the use of mind-body therapies. Having
          authored 280+ scientific articles, Dr. Garland is the world’s most
          prolific author of mindfulness research.
          <br />
          <br />
        </div>
        <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] flex items-center">
          <button className="cursor-pointer border-gray-200 border-solid border-[1px] py-25 px-5 bg-white rounded-rounded-lg overflow-hidden flex items-center justify-center gap-2">
            <Image
              className="h-35 w-35 relative hidden"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/arrow-narrow-right2.svg"
            />
            <div className="relative text-sm leading-[150%] font-medium font-[Inter] text-gray-9001 text-left">
              Read MORE Insights From Dr. Garland
            </div>
            <Image
              className="h-35 w-35 relative hidden"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/arrow-right-outline.svg"
            />
          </button>
        </button>
      </section>
    </div>
  );
};

export default AboutHome;
