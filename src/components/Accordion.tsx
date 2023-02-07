"use client";
import data from "../data"
import AccordionItems from "./AccordionItems";

export default function Accordion() {
  return (
    <div className="mx-auto w-full max-w-md border border-red-500">
        {data.map((item) => (
            <AccordionItems id={item.id} question={item.question} answer={item.answer} />
        ))}
    </div>
  );
}
