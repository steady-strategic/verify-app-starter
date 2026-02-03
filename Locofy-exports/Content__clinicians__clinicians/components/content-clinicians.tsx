import type { NextPage } from "next";
import Image from "next/image";

export type ContentCliniciansType = {
  className?: string;
};

const ContentClinicians: NextPage<ContentCliniciansType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1440px] h-[710px] bg-white max-w-full overflow-hidden flex flex-col items-center py-24 px-[0px] box-border ${className}`}
    >
      <section className="flex items-center gap-16 shrink-0">
        <Image
          className="h-[530px] w-[610px] object-cover"
          loading="lazy"
          width={610}
          height={530}
          sizes="100vw"
          alt=""
          src="/Left-Image@2x.png"
        />
        <section className="h-[501px] w-[606px] flex flex-col items-start gap-8 text-left text-[28px] text-primary-1 font-[Inter]">
          <div className="self-stretch flex flex-col items-start gap-4">
            <h3 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] shrink-0">
              <span>MORE</span>
              <span className="text-gray-900">
                {" "}
                gives clinicians a powerful, science-backed tool that builds
                resilience and restores well-being for their clients.
              </span>
            </h3>
            <div className="w-[606px] relative text-xl tracking-[-0.02em] leading-[140%] font-semibold text-gray-700 hidden shrink-0">
              it’s about helping people flourish. Most mindfulness programs stop
              at awareness. MORE goes further, guiding patients to:
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start text-lg text-gray-900">
            <div className="self-stretch h-px relative bg-gray-200" />
            <div className="self-stretch flex flex-col items-start pt-8 px-[0px] pb-[0px] gap-4">
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Delivered over eight weekly sessions
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Group therapy or individual
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Easy homework delivery
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Enriching for both patient and clinician
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    An insurance-reimbursable service covered by CPT codes
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    CE-eligible, earn up to 13 continuing education units
                  </div>
                </div>
              </div>
              <div className="w-[606px] hidden items-center gap-25 text-base">
                <div className="h-4 w-4 rounded-rounded-full bg-green-100 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up2.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Knowledge management
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-gray-200 border-solid border-[1px] py-25 px-5 bg-white rounded-rounded-lg flex items-center justify-center gap-2">
            <Image
              className="h-3.5 w-3.5 relative hidden shrink-0"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/arrow-narrow-right.svg"
            />
            <div className="relative text-sm leading-[150%] font-medium font-[Inter] text-gray-900 text-left shrink-0">
              Learn MORE
            </div>
            <Image
              className="h-3.5 w-3.5 relative hidden shrink-0"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/arrow-narrow-right.svg"
            />
          </button>
        </section>
      </section>
    </div>
  );
};

export default ContentClinicians;
