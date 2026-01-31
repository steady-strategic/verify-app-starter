"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Feature from "./feature";

export type Cards3x1Type = {
  className?: string;
};

const Cards3x1: NextPage<Cards3x1Type> = ({ className = "" }) => {
  const [featureItems] = useState([
    {
      contentitems0iconsrc: "/Content-items-0-icon-src.svg",
      contentitems0body:
        "A form of mental training focused on strengthening self-awareness and self-regulation to help people observe their thoughts, emotions, and sensations without being swept away by them. Through practice, patients learn to transform addictive habits, craving, and chronic pain by exercising neural networks involved in attention, emotion regulation, and pain processing.",
    },
    {
      contentitems0iconsrc: "/ontent-items-1-icon-src.svg",
      contentitems0body:
        "A cognitive strategy integrating mindfulness used to reframe distressing thoughts, negative core beliefs, or unhelpful interpretations of challenging life situations. Instead of suppressing or ignoring difficult emotions, patients learn to efficiently engage prefrontal brain resources to shift their perspective in ways that reduce suffering and create healthier patterns of behavior.",
    },
    {
      contentitems0iconsrc: "/Icon-Shapes.svg",
      contentitems0body:
        "A deliberate midfulness practice of amplifying positive emotions, reconnecting with natural rewards, and restoring the capacity to feel healthy pleasure, meaning, and joy. Because addiction, pain, depression, and trauma can disrupt the brain’s reward system, savoring helps heal this dysfunction by directing attention toward positive experiences and retraining the mind to appreciate life.",
    },
  ]);
  return (
    <div className={`max-w-full flex flex-col items-start ${className}`}>
      <section className="w-[1440px] h-[750px] bg-white1 overflow-hidden shrink-0 flex flex-col items-center pt-[77px] px-[0px] pb-[84px] box-border text-center text-[28px] text-[#d80ada] font-[Inter]">
        <div className="w-[1280px] flex flex-col items-center gap-[92px]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <h3 className="m-[0px] w-[928px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] inline-block">
              <span>MORE</span>
              <span className="text-gray-700">
                {" "}
                is a structured, rigorously-tested therapeutic protocol.
                Patients engage in mind-body training, delivered individually or
                in a group setting, to learn unique mindfulness, reappraisal,
                and savoring skills to strengthen recovery and generate
                well-being.
              </span>
            </h3>
          </div>
          <section className="self-stretch flex items-start gap-12">
            {featureItems.map((item, index) => (
              <Feature
                key={index}
                contentitems0iconsrc={item.contentitems0iconsrc}
                contentitems0body={item.contentitems0body}
              />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Cards3x1;
