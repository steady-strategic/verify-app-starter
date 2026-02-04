"use client";
import type { NextPage } from "next";
import { useState, type CSSProperties } from "react";
import Card from "./card";

export type Cards3x2Type = {
  className?: string;
  cardContentcard0title?: string;
  cardContentcard0title1?: string;
  cardContentcard0title2?: string;
  cardContentcard0title3?: string;
  cardContentcard0title4?: string;
  cardContentcard0title5?: string;
  cardContentcard0body?: string;
  cardContentcard0body1?: string;
  cardContentcard0body2?: string;
  cardContentcard0body3?: string;
  cardContentcard0body4?: string;
  cardContentcard0body5?: string;
  cardFlex?: CSSProperties["flex"];
  cardFlex1?: CSSProperties["flex"];
  cardFlex2?: CSSProperties["flex"];
  cardFlex3?: CSSProperties["flex"];
  cardFlex4?: CSSProperties["flex"];
  cardFlex5?: CSSProperties["flex"];
  cardWidth?: CSSProperties["width"];
  cardWidth1?: CSSProperties["width"];
  cardWidth2?: CSSProperties["width"];
  cardWidth3?: CSSProperties["width"];
  cardWidth4?: CSSProperties["width"];
  cardWidth5?: CSSProperties["width"];
  cardContentcardtitleMargin?: CSSProperties["margin"];
  cardContentcardtitleMargin1?: CSSProperties["margin"];
  cardContentcardtitleMargin2?: CSSProperties["margin"];
  cardContentcardtitleMargin3?: CSSProperties["margin"];
  cardContentcardtitleMargin4?: CSSProperties["margin"];
  cardContentcardtitleMargin5?: CSSProperties["margin"];
};

const Cards3x2: NextPage<Cards3x2Type> = ({
  className = "",
  cardContentcard0title,
  cardContentcard0title1,
  cardContentcard0title2,
  cardContentcard0title3,
  cardContentcard0title4,
  cardContentcard0title5,
  cardContentcard0body,
  cardContentcard0body1,
  cardContentcard0body2,
  cardContentcard0body3,
  cardContentcard0body4,
  cardContentcard0body5,
  cardFlex,
  cardFlex1,
  cardFlex2,
  cardFlex3,
  cardFlex4,
  cardFlex5,
  cardWidth,
  cardWidth1,
  cardWidth2,
  cardWidth3,
  cardWidth4,
  cardWidth5,
  cardContentcardtitleMargin,
  cardContentcardtitleMargin1,
  cardContentcardtitleMargin2,
  cardContentcardtitleMargin3,
  cardContentcardtitleMargin4,
  cardContentcardtitleMargin5,
}) => {
  const [cardItems] = useState([
    {
      cardFlex: 1,
      cardWidth: undefined,
      contentcard0title: "Understand the Science Behind Suffering",
      contentcard0titleMargin: undefined,
      contentcard0body:
        "Dive into the latest theoretical frameworks connecting pain, emotional dysregulation, and addiction through transdiagnostic neurobehavioral mechanisms.",
    },
    {
      cardFlex: undefined,
      cardWidth: undefined,
      contentcard0title: "Master Innovative Techniques",
      contentcard0titleMargin: "0" as const,
      contentcard0body:
        "Learn to deliver powerful mindfulness, cognitive reappraisal, and savoring techniques that go beyond traditional approaches.",
    },
    {
      cardFlex: undefined,
      cardWidth: undefined,
      contentcard0title: "Treat Craving at Its Core",
      contentcard0titleMargin: "0" as const,
      contentcard0body:
        "Implement targeted mindfulness techniques shown to reduce craving and support recovery from addictive behavior.",
    },
  ]);
  const [cardItems1] = useState([
    {
      cardFlex: "unset" as const,
      cardWidth: "394.7px" as const,
      contentcard0title: "Deliver Relief That Lasts",
      contentcard0titleMargin: "0" as const,
      contentcard0body:
        "Apply science-backed mindfulness methods proven to alleviate chronic pain and emotional distress.",
    },
    {
      cardFlex: "unset" as const,
      cardWidth: "394.7px" as const,
      contentcard0title: "Stay Ahead of the Curve",
      contentcard0titleMargin: "0" as const,
      contentcard0body:
        "Review the latest neuroscience and clinical research validating the efficacy of MORE™ in diverse populations.",
    },
    {
      cardFlex: "unset" as const,
      cardWidth: "394.7px" as const,
      contentcard0title: "Break the Cycle of Habitual Suffering",
      contentcard0titleMargin: "0" as const,
      contentcard0body:
        "Learn how to guide patients in de-automatizing destructive behaviors through mindfulness and metacognitive awareness.",
    },
  ]);
  return (
    <div
      className={`w-[1440px] bg-white max-w-full overflow-hidden flex flex-col items-center pt-24 px-[0px] pb-[115px] box-border ${className}`}
    >
      <section className="w-[1280px] flex flex-col items-start gap-[48px] text-center text-[28px] text-gray-900 font-[Inter]">
        <div className="self-stretch flex flex-col items-center justify-center">
          <h1 className="m-[0px] w-[848px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] flex items-center justify-center">
            Over the course of 13 hours of training, you can expect to learn:
          </h1>
        </div>
        <section className="self-stretch flex items-start gap-12">
          {cardItems.map((item, index) => (
            <Card
              key={index}
              cardFlex={item.cardFlex}
              cardWidth={item.cardWidth}
              contentcard0title={item.contentcard0title}
              contentcard0titleMargin={item.contentcard0titleMargin}
              contentcard0body={item.contentcard0body}
            />
          ))}
        </section>
        <section className="self-stretch flex items-start gap-12">
          {cardItems1.map((item, index) => (
            <Card
              key={index}
              cardFlex={item.cardFlex}
              cardWidth={item.cardWidth}
              contentcard0title={item.contentcard0title}
              contentcard0titleMargin={item.contentcard0titleMargin}
              contentcard0body={item.contentcard0body}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Cards3x2;
