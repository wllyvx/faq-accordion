"use client";
import data from "../data"
import AccordionItems from "./AccordionItems";

export default function Accordion() {
  return (
    <div className="mx-auto w-full mt-4 px-6 md:px-0 md:w-[21rem] h-[40vh] md:h-full md:max-h-[40vh] overflow-scroll">
        {data.map((item) => (
            <AccordionItems id={item.id} question={item.question} answer={item.answer} />
        ))}
    </div>
  );
}
