import type { NextPage } from "next";
import Image from "next/image";

export type FeatureType = {
  className?: string;
  contentitems0iconsrc: string;
  contentitems0body?: string;
};

const Feature: NextPage<FeatureType> = ({
  className = "",
  contentitems0iconsrc,
  contentitems0body,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start gap-4 text-left text-xl text-[#d80ada] font-[Inter] ${className}`}
    >
      <Image
        className="w-12 h-12 rounded-rounded-full"
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src={contentitems0iconsrc}
      />
      <div className="self-stretch flex flex-col items-start gap-2">
        <h3 className="m-[0px] self-stretch relative text-[length:inherit] leading-[125%] font-bold font-[inherit]">
          <span>MORE</span>
          <span className="text-gray-900"> Mindfulness</span>
        </h3>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-9001">
          {contentitems0body}
        </div>
      </div>
    </div>
  );
};

export default Feature;
