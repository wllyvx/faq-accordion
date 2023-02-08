"use client";
import { Disclosure, Transition } from "@headlessui/react";

type ItemProps = {
  id: number;
  question: string;
  answer: string;
};

export default function AccordionItems({ id, question, answer }: ItemProps) {
  return (
    <Disclosure as="div" className="border-b py-2 text-[0.825rem]">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left">
            <span
              className={`${
                open ? "font-bold text-very-dark-desaturated-blue" : ""
              } hover:font-bold hover:text-soft-red`}
            >
              {question}
            </span>
            <img
              src="./img/icon-arrow-down.svg"
              alt=""
              className={`${
                open ? "rotate-180 transform" : ""
              } transition-all duration-200`}
            />
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-0"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-0"
          >
            <Disclosure.Panel className="pb-2 text-gray-500">
              <span>{answer}</span>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
