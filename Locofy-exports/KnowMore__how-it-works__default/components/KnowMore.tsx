import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";

export type KnowMoreHowItWorksType = {
  className?: string;
  color?: CSSProperties["color"];
  iconOnly?: CSSProperties["iconOnly"];
  outline?: CSSProperties["outline"];
  size?: CSSProperties["size"];
  state?: CSSProperties["state"];
  buttonText?: string;
  arrowNarrowRight?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  showButtonText?: boolean;
};

const KnowMoreHowItWorks: NextPage<KnowMoreHowItWorksType> = ({
  className = "",
  color = "Alternative",
  iconOnly,
  outline,
  size = "base",
  state,
  buttonText,
  arrowNarrowRight,
  showRightIcon,
  showLeftIcon,
  showButtonText,
}) => {
  return (
    <div
      className={`w-[1440px] h-[400px] max-w-full flex flex-col items-start py-[107px] px-[117px] box-border relative isolate gap-[8px] text-left text-[50px] text-white font-[Inter] ${className}`}
    >
      <Image
        className="w-[1440px] h-[400px] !!m-[0 important] absolute top-[0px] left-[0px] object-cover z-[0] shrink-0"
        width={1440}
        height={400}
        sizes="100vw"
        alt=""
        src="/Background@2x.png"
      />
      <div className="w-[534px] flex flex-col items-start gap-[8px] z-[1] shrink-0">
        <div className="self-stretch relative tracking-[-0.02em]">
          <span className="leading-[110%] font-extrabold">
            <span>{`Know `}</span>
            <span className="text-primary-1">
              MORE
              <br />
            </span>
          </span>
          <b className="text-[28px] leading-[125%]">{`Sign up to receive Dr.Garland's insights `}</b>
        </div>
        <button className="cursor-pointer [border:none] py-35 px-6 bg-primary-1 rounded-md overflow-hidden flex items-center justify-center gap-2">
          <Image
            className="h-4 w-4 relative hidden shrink-0"
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src="/cart-plus1.svg"
          />
          <b className="relative text-lg leading-[150%] font-[Inter] text-white text-left shrink-0">
            Know MORE
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
      </div>
    </div>
  );
};

export default KnowMoreHowItWorks;
