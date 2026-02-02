import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import ThumbsUp from "./thumbs-up";

export type ContentHowItWorksType = {
  className?: string;
  iconShapesColor?: CSSProperties["color"];
  iconShapesColor1?: CSSProperties["color"];
  iconShapesColor2?: CSSProperties["color"];
  iconShapesColor3?: CSSProperties["color"];
  iconShapesColor4?: CSSProperties["color"];
  iconShapesDarkMode?: CSSProperties["darkMode"];
  iconShapesDarkMode1?: CSSProperties["darkMode"];
  iconShapesDarkMode2?: CSSProperties["darkMode"];
  iconShapesDarkMode3?: CSSProperties["darkMode"];
  iconShapesDarkMode4?: CSSProperties["darkMode"];
  iconShapesSize?: CSSProperties["size"];
  iconShapesSize1?: CSSProperties["size"];
  iconShapesSize2?: CSSProperties["size"];
  iconShapesSize3?: CSSProperties["size"];
  iconShapesSize4?: CSSProperties["size"];
  iconShapesType?: CSSProperties["type"];
  iconShapesType1?: CSSProperties["type"];
  iconShapesType2?: CSSProperties["type"];
  iconShapesType3?: CSSProperties["type"];
  iconShapesType4?: CSSProperties["type"];
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

const ContentHowItWorks: NextPage<ContentHowItWorksType> = ({
  className = "",
  iconShapesColor,
  iconShapesColor1,
  iconShapesColor2,
  iconShapesColor3,
  iconShapesColor4,
  iconShapesDarkMode,
  iconShapesDarkMode1,
  iconShapesDarkMode2,
  iconShapesDarkMode3,
  iconShapesDarkMode4,
  iconShapesSize,
  iconShapesSize1,
  iconShapesSize2,
  iconShapesSize3,
  iconShapesSize4,
  iconShapesType,
  iconShapesType1,
  iconShapesType2,
  iconShapesType3,
  iconShapesType4,
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
      className={`w-[1440px] bg-white max-w-full overflow-hidden flex items-center justify-between py-24 px-20 box-border gap-[20px] ${className}`}
    >
      <Image
        className="w-[610px] relative rounded-3xl max-h-full object-cover"
        loading="lazy"
        width={610}
        height={530}
        sizes="100vw"
        alt=""
        src="/Right-Content@2x.png"
      />
      <section className="w-[606px] flex flex-col items-start gap-[73px] text-left text-[28px] text-gray-900 font-[Inter]">
        <div className="self-stretch h-[328px] relative">
          <div className="absolute top-[0px] left-[0px] w-[606px] h-[107px] shrink-0">
            <h1 className="m-[0px] absolute top-[0px] left-[0px] text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit]">
              MORE isn’t just about reducing symptoms
            </h1>
            <div className="absolute top-[51px] left-[0px] text-xl tracking-[-0.02em] leading-[140%] font-semibold text-gray-700 inline-block w-[606px]">
              it’s about helping people flourish. Most mindfulness programs stop
              at acceptance. MORE goes further, guiding patients to:
            </div>
          </div>
          <div className="absolute top-[139px] left-[0px] w-[606px] h-[232px] shrink-0 text-lg">
            <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[606px] h-px" />
            <div className="absolute top-[1px] left-[0px] w-[606px] h-[231px]">
              <div className="absolute top-[32px] left-[0px] w-[606px] h-[27px]">
                <ThumbsUp
                  color={iconShapesColor}
                  darkMode={iconShapesDarkMode}
                  size={iconShapesSize}
                  type={iconShapesType}
                />
                <div className="absolute top-[0px] left-[26px] w-[580px] h-[27px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%]">
                    Break free from unhealthy habits with mindfulness
                  </div>
                </div>
              </div>
              <div className="absolute top-[75px] left-[0px] w-[606px] h-[27px]">
                <ThumbsUp
                  color={iconShapesColor1}
                  darkMode={iconShapesDarkMode1}
                  size={iconShapesSize1}
                  type={iconShapesType1}
                />
                <div className="absolute top-[0px] left-[26px] w-[580px] h-[27px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%]">
                    Reframe distressing thoughts and negative core beliefs
                  </div>
                </div>
              </div>
              <div className="absolute top-[118px] left-[0px] w-[606px] h-[27px]">
                <ThumbsUp
                  color={iconShapesColor2}
                  darkMode={iconShapesDarkMode2}
                  size={iconShapesSize2}
                  type={iconShapesType2}
                />
                <div className="absolute top-[0px] left-[26px] w-[580px] h-[27px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%]">
                    Amplify positive emotions and reconnect with natural rewards
                  </div>
                </div>
              </div>
              <div className="absolute top-[161px] left-[0px] w-[606px] h-[27px]">
                <ThumbsUp
                  color={iconShapesColor3}
                  darkMode={iconShapesDarkMode3}
                  size={iconShapesSize3}
                  type={iconShapesType3}
                />
                <div className="absolute top-[0px] left-[26px] w-[580px] h-[27px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%]">
                    Experience powerful and lasting change with just 8 weekly
                    sessions
                  </div>
                </div>
              </div>
              <div className="absolute top-[204px] left-[0px] w-[606px] h-[27px]">
                <ThumbsUp
                  color={iconShapesColor4}
                  darkMode={iconShapesDarkMode4}
                  size={iconShapesSize4}
                  type={iconShapesType4}
                />
                <div className="absolute top-[0px] left-[26px] w-[580px] h-[27px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%]">
                    Relieve physical and emotional pain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer border-gray-200 border-solid border-[1px] py-25 px-5 bg-white rounded-rounded-lg flex items-center justify-center gap-2">
          <Image
            className="h-3.5 w-3.5 relative hidden shrink-0"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/arrow-narrow-right.svg"
          />
          <div className="relative text-sm leading-[150%] font-medium font-[Inter] text-gray-900 text-left shrink-0">
            Learn MORE
          </div>
          <Image
            className="h-3.5 w-3.5 relative hidden shrink-0"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/arrow-narrow-right.svg"
          />
        </button>
      </section>
    </div>
  );
};

export default ContentHowItWorks;
