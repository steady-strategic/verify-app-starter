import type { NextPage } from "next";
import Image from "next/image";

export type VideoType = {
  className?: string;
};

const Video: NextPage<VideoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[856px] max-w-full overflow-hidden flex flex-col items-start py-[0px] px-20 box-border relative isolate gap-25 ${className}`}
    >
      <Image
        className="w-[1440px] h-[856px] !!m-[0 important] absolute top-[0px] left-[0px] object-cover z-[0] shrink-0"
        width={1440}
        height={856}
        sizes="100vw"
        alt=""
        src="/Background1@2x.png"
      />
      <main className="h-[856px] flex flex-col items-center py-[64px] px-[0px] box-border gap-[49px] z-[1] shrink-0 text-center text-[50px] text-white font-[Inter]">
        <div className="w-[1280px] flex flex-col items-center gap-4 shrink-0">
          <h1 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit]">
            See MORE in action
          </h1>
          <div className="w-[672px] relative text-xl tracking-[-0.02em] leading-[140%] font-semibold inline-block">
            Learn how MORE targets the brain's reward processes to restore
            responsiveness to natural pleasure and reduce opioid cravings.
          </div>
        </div>
        <Image
          className="w-[1020px] h-[616px] rounded-3xl object-cover shrink-0"
          width={1020}
          height={616}
          sizes="100vw"
          alt=""
          src="/Video@2x.png"
        />
      </main>
    </div>
  );
};

export default Video;
