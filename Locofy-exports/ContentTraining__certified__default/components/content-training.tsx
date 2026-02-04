import type { NextPage } from "next";
import Image from "next/image";

export type ContentTrainingType = {
  className?: string;
};

const ContentTraining: NextPage<ContentTrainingType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full overflow-hidden flex flex-col items-start pt-[115px] px-20 pb-[116px] box-border ${className}`}
    >
      <section className="self-stretch flex items-center gap-[64px]">
        <Image
          className="h-[705px] w-[610px] object-cover"
          loading="lazy"
          width={610}
          height={705}
          sizes="100vw"
          alt=""
          src="/Left-Image3@2x.png"
        />
        <section className="w-[606px] flex flex-col items-start gap-[33px] text-left text-[28px] text-gray-900 font-[Inter]">
          <div className="self-stretch flex flex-col items-start">
            <h1 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit]">
              What to expect:
            </h1>
          </div>
          <div className="self-stretch h-[459px] flex items-center justify-center text-lg">
            <div className="w-[606px] relative leading-[150%] inline-block shrink-0">
              <span>{`This training provides comprehensive instruction in the core mindfulness practices and clinical skills central to MORE. Participants will `}</span>
              <b>
                learn the theoretical foundations of the MORE model, review
                current research evidence, and explore recent advances
              </b>
              <span>{` in neuroscience and biobehavioral science related to mindfulness, addiction, stress, and chronic pain.<br/><br/>The training includes `}</span>
              <b>guided demonstrations</b>
              <span>{` of the therapeutic techniques outlined in the MORE treatment manual and `}</span>
              <b>structured opportunities for applied practice</b>
              <span>{`. Participants will observe expert delivery of MORE interventions and receive clear guidance for implementing these methods with fidelity.<br/><br/>Upon completion, participants will `}</span>
              <b>
                gain a solid introductory level of competency in delivering MORE
                a
              </b>
              <span>
                nd will be prepared to begin applying these techniques with
                individuals experiencing addictive behaviors, chronic pain
                conditions, or emotional distress.
              </span>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-25 px-5 bg-primary-1 rounded-rounded-lg overflow-hidden flex items-center justify-center">
            <b className="relative text-lg leading-[150%] font-[Inter] text-white text-left">
              Pre-Register Today
            </b>
          </button>
        </section>
      </section>
    </div>
  );
};

export default ContentTraining;
