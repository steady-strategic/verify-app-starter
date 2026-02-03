import type { NextPage } from "next";
import Image from "next/image";

export type PageBannerCliniciansType = {
  className?: string;
};

const PageBannerClinicians: NextPage<PageBannerCliniciansType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1440px] h-[680px] bg-white max-w-full overflow-hidden flex items-center py-[70px] px-20 box-border gap-[63px] ${className}`}
    >
      <section className="w-[571px] flex flex-col items-start shrink-0 text-left text-[50px] text-gray-900 font-[Inter]">
        <div className="self-stretch flex flex-col items-start">
          <div className="self-stretch flex flex-col items-start gap-5">
            <h1 className="m-[0px] w-[563px] relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] flex items-center">
              <span className="w-full">
                <span>Why</span>
                <span className="text-primary-1"> MORE?</span>
              </span>
            </h1>
            <div className="self-stretch h-[436px] relative inline-block text-[28px]">
              <b className="tracking-[-0.02em] leading-[125%]">
                Provide Real, Lasting Recovery
                <br />
              </b>
              <span className="text-lg leading-[150%]">
                <br />
                For clinicians seeking a therapy that simultaneously addresses a
                wide array of afflictions including addiction, chronic pain, and
                emotional distress —MORE addresses these challenges at their
                core.  Hailed as one the greatest breakthroughs in psychotherapy
                in the past 30 years, MORE unifies the most powerful elements of
                mindfulness, cognitive‑behavioral therapy, and positive
                psychology into a single, neuroscience‑driven method that
                restores the brain’s capacity for regulation, well‑being,
                meaning, and joy.    Discover how MORE can deepen your
                therapeutic impact, broaden your clinical toolkit, and help your
                patients achieve levels of healing and transformation that once
                felt out of reach.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[680px] w-[726px] relative shrink-0">
        <div className="absolute top-[-8px] left-[-6px] w-[740px] flex flex-col items-start p-[8px] box-border shrink-0">
          <Image
            className="self-stretch flex-1 relative rounded-t-none rounded-br-none rounded-bl-3xl max-w-full overflow-hidden max-h-full w-full h-auto object-cover"
            loading="lazy"
            width={724}
            height={680}
            sizes="100vw"
            alt=""
            src="/content-right-image-src@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default PageBannerClinicians;
