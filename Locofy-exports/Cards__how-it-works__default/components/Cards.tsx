import type { NextPage } from "next";
import Image from "next/image";

export type CardsType = {
  className?: string;
};

const Cards: NextPage<CardsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[750px] bg-white max-w-full overflow-hidden flex flex-col items-center pt-[77px] px-[0px] pb-[84px] box-border ${className}`}
    >
      <section className="w-[1280px] flex flex-col items-center gap-[92px] text-center text-[28px] text-primary-1 font-[Inter]">
        <div className="self-stretch flex flex-col items-center justify-center">
          <h3 className="m-[0px] w-[928px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] inline-block">
            <span>MORE</span>
            <span className="text-gray-700">
              {" "}
              is a structured, rigorously-tested therapeutic protocol. Patients
              engage in mind-body training, delivered individually or in a group
              setting, to learn unique mindfulness, reappraisal, and savoring
              skills to strengthen recovery and generate well-being.
            </span>
          </h3>
        </div>
        <section className="self-stretch flex items-start gap-12 text-left text-xl text-primary-1 font-[Inter]">
          <div className="flex-1 flex flex-col items-start gap-4">
            <Image
              className="w-12 h-12 rounded-rounded-full"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/Content-items-0-icon-src.svg"
            />
            <div className="self-stretch flex flex-col items-start gap-2">
              <h3 className="m-[0px] self-stretch relative text-[length:inherit] leading-[125%] font-bold font-[inherit]">
                <span>MORE</span>
                <span className="text-gray-900"> Mindfulness</span>
              </h3>
              <div className="self-stretch relative text-lg leading-[150%] text-gray-9001">
                A form of mental training focused on strengthening
                self-awareness and self-regulation to help people observe their
                thoughts, emotions, and sensations without being swept away by
                them. Through practice, patients learn to transform addictive
                habits, craving, and chronic pain by exercising neural networks
                involved in attention, emotion regulation, and pain processing.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-4">
            <Image
              className="w-12 h-12 relative rounded-rounded-full"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/ontent-items-1-icon-src.svg"
            />
            <div className="self-stretch flex flex-col items-start gap-2">
              <h3 className="m-[0px] self-stretch relative text-[length:inherit] leading-[125%] font-bold font-[inherit]">
                <span>MORE</span>
                <span className="text-gray-900"> Reappraisal</span>
              </h3>
              <div className="self-stretch relative text-lg leading-[150%] text-gray-9001">
                A cognitive strategy integrating mindfulness used to reframe
                distressing thoughts, negative core beliefs, or unhelpful
                interpretations of challenging life situations. Instead of
                suppressing or ignoring difficult emotions, patients learn to
                efficiently engage prefrontal brain resources to shift their
                perspective in ways that reduce suffering and create healthier
                patterns of behavior.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-4">
            <Image
              className="w-12 h-12 rounded-rounded-full"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/Icon-Shapes.svg"
            />
            <div className="self-stretch flex flex-col items-start gap-2">
              <h3 className="m-[0px] self-stretch relative text-[length:inherit] leading-[125%] font-bold font-[inherit]">
                <span>MORE</span>
                <span className="text-gray-900"> Savoring</span>
              </h3>
              <div className="self-stretch relative text-lg leading-[150%] text-gray-9001">
                A deliberate midfulness practice of amplifying positive
                emotions, reconnecting with natural rewards, and restoring the
                capacity to feel healthy pleasure, meaning, and joy. Because
                addiction, pain, depression, and trauma can disrupt the brain’s
                reward system, savoring helps heal this dysfunction by directing
                attention toward positive experiences and retraining the mind to
                appreciate life.
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Cards;
