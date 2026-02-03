import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import CartPlus from "./cart-plus";

export type KnowMoreType = {
  className?: string;
  color?: CSSProperties["color"];
  iconOnly?: CSSProperties["iconOnly"];
  outline?: CSSProperties["outline"];
  size?: CSSProperties["size"];
  state?: CSSProperties["state"];
  buttonText?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  showButtonText?: boolean;
};

const KnowMore: NextPage<KnowMoreType> = ({
  className = "",
  color = "Alternative",
  iconOnly,
  outline,
  size = "base",
  state,
  buttonText,
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
      <div className="w-[534px] flex flex-col items-start gap-[41px] z-[1] shrink-0">
        <div className="self-stretch flex items-center justify-center">
          <div className="w-[534px] relative tracking-[-0.02em] flex items-center shrink-0">
            <span className="w-full">
              <span className="leading-[110%] font-extrabold">
                <span>{`Know `}</span>
                <span className="text-primary-1">
                  MORE
                  <br />
                </span>
              </span>
              <b className="text-[28px] leading-[125%]">{`Sign up to receive Dr.Garland's insights `}</b>
            </span>
          </div>
        </div>
        <CartPlus
          color={color}
          iconOnly={iconOnly}
          outline={outline}
          size={size}
          state={state}
          showLeftIcon={showLeftIcon}
          buttonText={buttonText}
          showRightIcon={showRightIcon}
          showButtonText={showButtonText}
        />
      </div>
    </div>
  );
};

export default KnowMore;
