import type { NextPage } from "next";
import Image from "next/image";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[899px] max-w-full flex items-start pt-[200px] px-[189px] pb-[51px] box-border relative isolate ${className}`}
    >
      <Image
        className="w-full absolute !!m-[0 important] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[0] shrink-0"
        width={1440}
        height={899}
        sizes="100vw"
        alt=""
        src="/content-hero-bg-src@2x.png"
      />
      <main className="w-[1061px] flex flex-col items-start gap-[170px] z-[1] shrink-0">
        <section className="self-stretch h-[369px] flex flex-col items-center gap-[22px] text-center text-[85px] text-white font-[Inter]">
          <div className="self-stretch flex items-center justify-center shrink-0">
            <h1 className="m-[0px] relative text-[length:inherit] tracking-[-0.02em] leading-[130%] font-extrabold font-[inherit]">
              <span>{`Get `}</span>
              <span className="text-primary-1">MORE</span>
              <span> out of therapy</span>
            </h1>
          </div>
          <div className="w-[768px] h-[70px] overflow-hidden shrink-0 flex items-center py-1.5 px-[243px] box-border relative isolate gap-2.5 text-[64px]">
            <h2 className="!!m-[0 important] h-[70px] w-[768px] absolute top-[0px] left-[0px] text-[length:inherit] tracking-[-0.02em] leading-[64px] font-light font-[inherit] inline-block z-[0] shrink-0">
              More joy
            </h2>
            <div className="h-[58px] w-[7px] relative bg-primary-1 z-[1] shrink-0" />
          </div>
          <div className="flex items-center justify-center py-2.5 px-[0px] shrink-0 text-[28px]">
            <div className="w-[562px] relative tracking-[-0.02em] leading-[125%] font-medium inline-block shrink-0">
              Breakthrough evidence-based therapy for addiction, pain, and
              emotional distress
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-35 px-6 bg-primary-1 w-[156px] h-[53px] rounded-md overflow-hidden shrink-0 flex items-center justify-center box-border gap-2">
            <div className="h-4 w-4 relative overflow-hidden shrink-0 hidden">
              <Image
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full hidden"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/cart-plus1.svg"
              />
            </div>
            <b className="relative text-lg leading-[150%] font-[Inter] text-white text-left shrink-0">
              Get Certified
            </b>
            <Image
              className="h-4 w-4 relative hidden shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/cart-plus1.svg"
            />
          </button>
        </section>
        <section className="self-stretch h-[109px] flex items-center gap-[127px] text-center text-[50px] text-primary-1 font-[Inter]">
          <div className="w-[170px] flex flex-col items-center gap-[8px]">
            <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit]">
              3X
            </h2>
            <div className="self-stretch relative text-lg leading-[125%] text-white">
              As effective as standard therapy
            </div>
          </div>
          <div className="w-[170px] flex flex-col items-center gap-[8px]">
            <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit]">
              42%
            </h2>
            <div className="self-stretch relative text-lg leading-[125%] text-white">
              Reduction in drug relapse
            </div>
          </div>
          <div className="w-[170px] flex flex-col items-center gap-[8px]">
            <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit]">
              50%
            </h2>
            <div className="self-stretch relative text-lg leading-[125%] text-white">
              Reduction in cravings
            </div>
          </div>
          <div className="w-[170px] flex flex-col items-center gap-[8px]">
            <h2 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[110%] font-extrabold font-[inherit]">
              30%
            </h2>
            <div className="self-stretch relative text-lg leading-[125%] text-white">
              Reduction in <br />
              pain
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
