import Accordion from "./Accordion";
import Image from "next/image";

export default function Card() {
  return (
    <div className="w-full max-w-[57.5rem] rounded-3xl bg-white text-dark md:overflow-hidden">
      <div className="relative flex w-full flex-col items-center justify-center gap-0 bg-mobile-pattern bg-top bg-no-repeat p-0 md:flex-row md:justify-between md:gap-20 md:bg-desktop-pattern md:bg-cover md:bg-left-offset md:py-16 md:pr-28">
        <Image
          src="./img/illustration-woman-online-mobile.svg"
          width={600}
          height={600}
          alt="illustration"
          className="absolute -top-[20%] block w-60 md:hidden"
        />
        <Image
          src="./img/illustration-woman-online-desktop.svg"
          width={600}
          height={600}
          alt="illustration"
          className="-ml-[5.25rem] hidden md:block"
        />
        <div className="flex w-full flex-col items-center justify-center pt-[8.25rem] pb-10 md:items-start md:py-0">
          <h1 className="text-3xl font-semibold text-black">FAQ</h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
