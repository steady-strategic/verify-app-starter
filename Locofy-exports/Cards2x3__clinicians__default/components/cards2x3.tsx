import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import Item from "./item";
import Item1 from "./item1";

export type Cards2x3Type = {
  className?: string;
  itemContentitems0title?: string;
  itemContentitems0title1?: string;
  itemAvatar: string;
  itemAvatar1: string;
  itemName1?: string;
  itemName11?: string;
  itemTitle?: string;
  itemTitle1?: string;
  itemContentAlignItems?: CSSProperties["alignItems"];
  itemContentAlignItems1?: CSSProperties["alignItems"];
  itemContentJustify?: CSSProperties["justifyContent"];
  itemContentJustify1?: CSSProperties["justifyContent"];
  itemContentitemsbodyWidth?: CSSProperties["width"];
  itemContentitemsbodyWidth1?: CSSProperties["width"];
  itemContentitems2title?: string;
  itemContentitems2title1?: string;
  itemContentitems2title2?: string;
  itemContentitems2title3?: string;
  itemAvatar2: string;
  itemAvatar3: string;
  itemAvatar4: string;
  itemAvatar5: string;
  itemName12?: string;
  itemName13?: string;
  itemName14?: string;
  itemName15?: string;
  itemContentAlignSelf?: CSSProperties["alignSelf"];
  itemContentAlignSelf1?: CSSProperties["alignSelf"];
  itemContentAlignSelf2?: CSSProperties["alignSelf"];
  itemContentAlignSelf3?: CSSProperties["alignSelf"];
  itemContentitemsbodyWidth2?: CSSProperties["width"];
  itemContentitemsbodyWidth3?: CSSProperties["width"];
  itemContentitemsbodyWidth4?: CSSProperties["width"];
  itemContentitemsbodyWidth5?: CSSProperties["width"];
  itemContentitemsbodyColor?: CSSProperties["color"];
  itemContentitemsbodyColor1?: CSSProperties["color"];
  itemContentitemsbodyColor2?: CSSProperties["color"];
  itemContentitemsbodyColor3?: CSSProperties["color"];
};

const Cards2x3: NextPage<Cards2x3Type> = ({
  className = "",
  itemContentitems0title,
  itemContentitems0title1,
  itemAvatar,
  itemAvatar1,
  itemName1,
  itemName11,
  itemTitle,
  itemTitle1,
  itemContentAlignItems,
  itemContentAlignItems1,
  itemContentJustify,
  itemContentJustify1,
  itemContentitemsbodyWidth,
  itemContentitemsbodyWidth1,
  itemContentitems2title,
  itemContentitems2title1,
  itemContentitems2title2,
  itemContentitems2title3,
  itemAvatar2,
  itemAvatar3,
  itemAvatar4,
  itemAvatar5,
  itemName12,
  itemName13,
  itemName14,
  itemName15,
  itemContentAlignSelf,
  itemContentAlignSelf1,
  itemContentAlignSelf2,
  itemContentAlignSelf3,
  itemContentitemsbodyWidth2,
  itemContentitemsbodyWidth3,
  itemContentitemsbodyWidth4,
  itemContentitemsbodyWidth5,
  itemContentitemsbodyColor,
  itemContentitemsbodyColor1,
  itemContentitemsbodyColor2,
  itemContentitemsbodyColor3,
}) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full overflow-hidden flex flex-col items-start py-[108px] px-20 box-border ${className}`}
    >
      <section className="self-stretch flex flex-col items-center gap-[78px] text-center text-[28px] text-gray-900 font-[Inter]">
        <div className="w-[964px] flex flex-col items-center gap-4">
          <h3 className="m-[0px] w-[694px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] flex items-center">
            <span className="w-full">
              <span>{`Why `}</span>
              <span className="text-primary-1">MORE</span>
              <span>
                {" "}
                Works,
                <br />
                and Why Clinicians Trust It
              </span>
            </span>
          </h3>
          <div className="w-[482px] relative text-lg leading-[150%] flex items-center">
            <span className="w-full">
              <span>{`Rigorously tested in over `}</span>
              <b>16 clinical trials and funded by $90M in federal grants</b>
              <span>
                , MORE is proven to help patients shift from reactive responses
                to mindful awareness, self-regulation and natural reward.
              </span>
            </span>
          </div>
        </div>
        <main className="self-stretch shadow-[0px_0px_9.9px_rgba(0,_0,_0,_0.03)] rounded-3xl bg-white border-[#f4f4f4] border-solid border-[1px] flex flex-col items-center">
          <section className="self-stretch h-[210px] flex items-start">
            <Item
              contentAlignItems={itemContentAlignItems}
              contentJustifyContent={itemContentJustify}
              contentitems0title={itemContentitems0title}
              contentitems0bodyWidth={itemContentitemsbodyWidth}
              avatar={itemAvatar}
              name1={itemName1}
              title={itemTitle}
            />
            <div className="self-stretch w-px relative bg-gray-200" />
            <Item
              contentAlignItems={itemContentAlignItems1}
              contentJustifyContent={itemContentJustify1}
              contentitems0title={itemContentitems0title1}
              contentitems0bodyWidth={itemContentitemsbodyWidth1}
              avatar={itemAvatar1}
              name1={itemName11}
              title={itemTitle1}
            />
          </section>
          <section className="self-stretch h-[179px] flex items-start">
            <Item1
              contentAlignSelf={itemContentAlignSelf}
              contentitems2title={itemContentitems2title}
              contentitems2bodyWidth={itemContentitemsbodyWidth2}
              contentitems2bodyColor={itemContentitemsbodyColor}
              avatar={itemAvatar2}
              name1={itemName12}
            />
            <div className="self-stretch w-px relative bg-gray-200" />
            <Item1
              contentAlignSelf={itemContentAlignSelf1}
              contentitems2title={itemContentitems2title1}
              contentitems2bodyWidth={itemContentitemsbodyWidth3}
              contentitems2bodyColor={itemContentitemsbodyColor1}
              avatar={itemAvatar3}
              name1={itemName13}
            />
          </section>
          <section className="self-stretch h-[210px] flex items-start">
            <Item1
              contentAlignSelf={itemContentAlignSelf2}
              contentitems2title={itemContentitems2title2}
              contentitems2bodyWidth={itemContentitemsbodyWidth4}
              contentitems2bodyColor={itemContentitemsbodyColor2}
              avatar={itemAvatar4}
              name1={itemName14}
            />
            <div className="self-stretch w-px relative bg-gray-200" />
            <Item1
              contentAlignSelf={itemContentAlignSelf3}
              contentitems2title={itemContentitems2title3}
              contentitems2bodyWidth={itemContentitemsbodyWidth5}
              contentitems2bodyColor={itemContentitemsbodyColor3}
              avatar={itemAvatar5}
              name1={itemName15}
            />
          </section>
        </main>
        <button className="cursor-pointer [border:none] py-25 px-5 bg-primary-1 rounded-rounded-lg flex items-center justify-center gap-2">
          <Image
            className="h-35 w-35 relative hidden"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/cart-plus2.svg"
          />
          <div className="relative text-xl leading-[150%] font-semibold font-[Inter] text-white text-left">
            Read the Research
          </div>
          <Image
            className="h-35 w-35 relative hidden"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/cart-plus2.svg"
          />
        </button>
      </section>
    </div>
  );
};

export default Cards2x3;
