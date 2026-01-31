import type { NextPage } from "next";
import Image from "next/image";

export type PageBannerType = {
  className?: string;
};

const PageBanner: NextPage<PageBannerType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[680px] max-w-full overflow-hidden flex items-center justify-between py-[70px] px-20 box-border gap-[20px] bg-[url('/Page-Banner@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    >
      <section className="h-[426px] w-[571px] flex flex-col items-start text-left text-[50px] text-white font-[Inter]">
        <div className="self-stretch flex flex-col items-start gap-6 shrink-0">
          <div className="self-stretch flex flex-col items-start">
            <h1 className="m-[0px] w-[563px] relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit] flex items-center">
              How it Works
            </h1>
          </div>
          <div className="self-stretch h-[428px] relative inline-block text-[28px]">
            <b className="tracking-[-0.02em] leading-[125%]">
              Mindfulness-Oriented Recovery Enhancement <br />
            </b>
            <span className="text-lg leading-[150%]">
              <br />
              An evidence‑based, neuroscience‑informed therapy—backed by more
              than 16 clinical trials and over $90 million in federal
              research—that unites innovative mindfulness, reappraisal, and
              savoring techniques into a powerful, sequenced mind‑body approach.
              <br />
              <br />
              Hailed as one of the biggest breakthroughs in psychotherapy in the
              past 30 years, MORE has the strongest evidence base of any therapy
              for co-occurring addiction, chronic pain, and emotional distress.
            </span>
          </div>
        </div>
      </section>
      <Image
        className="h-[492px] w-[656px] relative object-cover"
        loading="lazy"
        width={656}
        height={492}
        sizes="100vw"
        alt=""
        src="/Right@2x.png"
      />
    </div>
  );
};

export default PageBanner;
