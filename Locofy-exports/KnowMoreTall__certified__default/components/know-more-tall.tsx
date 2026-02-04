import type { NextPage } from "next";
import Image from "next/image";

export type KnowMoreTallType = {
  className?: string;
};

const KnowMoreTall: NextPage<KnowMoreTallType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[550px] max-w-full flex flex-col items-start py-[147px] px-[109px] box-border relative isolate gap-[8px] ${className}`}
    >
      <Image
        className="w-[1440px] h-[550px] !!m-[0 important] absolute top-[0px] left-[0px] object-cover z-[0] shrink-0"
        width={1440}
        height={550}
        sizes="100vw"
        alt=""
        src="/Background3@2x.png"
      />
      <section className="w-[855px] flex flex-col items-start gap-[35px] z-[1] shrink-0 text-left text-[50px] text-white font-[Inter]">
        <div className="self-stretch flex items-center justify-center">
          <div className="w-[855px] relative tracking-[-0.02em] leading-[110%] font-extrabold flex items-center shrink-0">
            Join the 1000+ providers nationwide who are bringing powerful relief
            to their clients.
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-35 px-6 bg-primary-1 rounded-md overflow-hidden flex items-center justify-center">
          <b className="relative text-lg leading-[150%] font-[Inter] text-white text-left">
            Pre-register Today
          </b>
        </button>
      </section>
    </div>
  );
};

export default KnowMoreTall;
