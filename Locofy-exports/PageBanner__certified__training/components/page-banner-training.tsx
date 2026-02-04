import type { NextPage } from "next";
import Image from "next/image";

export type PageBannerTrainingType = {
  className?: string;
};

const PageBannerTraining: NextPage<PageBannerTrainingType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1440px] h-[680px] bg-white max-w-full overflow-hidden flex items-center py-[70px] px-20 box-border gap-[63px] ${className}`}
    >
      <section className="h-[644px] w-[571px] flex flex-col items-start shrink-0 text-left text-[50px] text-primary-1 font-[Inter]">
        <div className="self-stretch flex flex-col items-start">
          <div className="self-stretch flex flex-col items-start gap-5">
            <h1 className="m-[0px] w-[563px] relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] flex items-center">
              <span className="w-full">
                <span>MORE</span>
                <span className="text-gray-700">{` Training `}</span>
              </span>
            </h1>
            <div className="self-stretch h-[563px] relative text-gray-9001 inline-block text-lg">
              <p className="m-[0px] text-[28px]">
                <b className="tracking-[-0.02em] leading-[125%]">
                  Learn how to deliver MORE in your own practice. MORE Institute
                  is an interactive learning platform that offers:
                </b>
              </p>
              <p className="m-[0px] leading-[150%]">&nbsp;</p>
              <p className="m-[0px] leading-[150%]">
                Learn how to deliver MORE in your own practice. MORE Institute
                is an interactive learning platform that offers:
              </p>
              <p className="m-[0px] leading-[150%]">&nbsp;</p>
              <ul className="m-[0px] pl-[24px]">
                <li>
                  <span className="leading-[150%]">
                    Engaging asynchronous and on-demand training to become MORE
                    certified
                  </span>
                </li>
                <li>
                  <span className="leading-[150%]">
                    CE-eligible and reimbursable
                  </span>
                </li>
                <li>
                  <span className="leading-[150%]">
                    Professional videos, interactive exercises, and group
                    supervision sessions
                  </span>
                </li>
                <li>
                  <span className="leading-[150%]">
                    Ready-to-use tools including scripts, handouts, and guided
                    mind-body techniques
                  </span>
                </li>
                <li>
                  <span className="leading-[150%]">
                    Instruction on delivering MORE to patients over eight weekly
                    sessions
                  </span>
                </li>
              </ul>
              <p className="m-[0px] leading-[150%]">&nbsp;</p>
              <p className="m-[0px] leading-[150%]">
                Our on-demand training follows the same proven format as our
                2-day live experience, with interactive check-ins throughout to
                support focus and learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[726px] flex flex-col items-end shrink-0">
        <Image
          className="self-stretch h-[681.9px] relative max-w-full overflow-hidden shrink-0 w-full object-cover"
          width={726}
          height={681.9}
          sizes="100vw"
          alt=""
          src="/Content@2x.png"
        />
      </div>
    </div>
  );
};

export default PageBannerTraining;
