"use client";
import data from "../data"
import AccordionItems from "./AccordionItems";

export default function Accordion() {
  return (
    <div className="mx-auto w-full mt-4 px-6 md:px-0 md:mx-0 md:w-[21rem] h-[40vh] md:h-[33vh] overflow-scroll">
        {data.map((item) => (
            <AccordionItems key={item.id} id={item.id} question={item.question} answer={item.answer} />
        ))}
    </div>
  );
}
