import Accordion from "./Accordion";
import Image from "next/image";

export default function Card() {
  return (
    <div className="w-full max-w-[57.5rem] rounded-3xl bg-white text-dark">
      <div className="relative flex w-full flex-col items-center justify-center gap-0 bg-mobile-pattern bg-top bg-no-repeat p-0 md:flex-row md:justify-between md:gap-20 md:bg-desktop-pattern md:bg-cover md:bg-left-offset md:py-16 md:pr-28">
        <Image
          src="./img/illustration-woman-online-mobile.svg"
          width={600}
          height={600}
          alt="illustration woman online mobile"
          className="absolute -top-[22%] block w-60 md:hidden"
        />
        <div className="w-[60rem] h-[23.8rem] relative hidden md:block overflow-hidden">
            <Image
            src="./img/illustration-woman-online-desktop.svg"
            fill
            objectFit="contain"
            alt="illustration woman mobile dekstop"
            className="-ml-[3.3rem] scale-125"
            />
        </div>
        <Image
          src="./img/illustration-box-desktop.svg"
          width={600}
          height={600}
          alt="illustration box"
          className="absolute hidden -left-[7.5rem] top-[12.85rem] w-48 md:block"
        />
        <div className="flex w-full flex-col items-center justify-center pt-[8.25rem] pb-10 md:items-start md:justify-start md:py-0">
          <h1 className="text-3xl font-semibold text-black">FAQ</h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
