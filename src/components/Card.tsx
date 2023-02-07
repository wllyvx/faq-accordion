import Accordion from "./Accordion";
import Image from "next/image";

export default function Card() {
    return (
        <div className="bg-white text-dark w-full rounded-3xl">
            <div className=" bg-mobile-pattern bg-no-repeat bg-top flex flex-col items-center justify-center relative">
                <Image src="./img/illustration-woman-online-mobile.svg" width={600} height={600} alt="illustration" className="absolute -top-[30%] w-60" />
                <h1 className="text-black text-3xl font-semibold mt-32">FAQ</h1>
                <Accordion />
            </div>
        </div>
    )
}