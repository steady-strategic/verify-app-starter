import type { NextPage } from "next";
import Image from "next/image";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full overflow-hidden flex flex-col items-center py-24 px-[0px] box-border ${className}`}
    >
      <section className="w-[1280px] flex flex-col items-center gap-7 text-center text-[28px] text-gray-900 font-[Inter]">
        <div className="flex flex-col items-start gap-4">
          <h1 className="m-[0px] w-[672px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] flex items-center justify-center">
            Testimonials
          </h1>
          <div className="w-[672px] relative text-lg leading-[150%] text-gray-700 flex items-center justify-center">
            Hear from clinicians who use MORE in their practice
          </div>
        </div>
        <section className="w-[1216px] flex flex-col items-start gap-8 text-center text-xl text-gray-900 font-[Inter]">
          <div className="self-stretch flex flex-col items-center">
            <div className="w-[768px] relative tracking-[-0.02em] leading-[140%] font-semibold inline-block">
              “This is an intervention that has demonstrated both during
              in-person and virtual settings a level of healing that I have not
              seen in any other treatment approach I have provided.”
            </div>
          </div>
          <div className="self-stretch flex items-center justify-center gap-35 text-left text-base">
            <Image
              className="h-6 w-6 relative rounded-[100px] object-cover hidden shrink-0"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Avatar4@2x.png"
            />
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative leading-[125%] font-semibold">
                Trish Dooley Budsock, MA, LPC
              </div>
              <div className="relative leading-[125%] font-semibold">/</div>
              <div className="relative text-sm leading-[125%] text-gray-500">
                Robert Wood Johnson Medical School at Rutgers
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-start justify-center gap-6">
            <Image
              className="cursor-pointer [border:none] p-[0px] bg-[transparent] h-5 w-5 relative"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/arrow-left-outline.svg"
            />
            <Image
              className="cursor-pointer [border:none] p-[0px] bg-[transparent] h-5 w-5 relative"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/arrow-right-outline1.svg"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
