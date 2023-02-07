"use client"
import { Disclosure } from "@headlessui/react"

type ItemProps = {
    id: number
    question: string
    answer: string
}

export default function AccordionItems({id, question, answer} : ItemProps) {
    return (
        <Disclosure as="div" className="text-[0.825rem] border-b py-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2 text-left flex items-center justify-between w-full">
              <span className={`${open ? 'font-bold text-very-dark-desaturated-blue' : ''} hover:font-bold hover:text-soft-red`}>{question}</span>
              <img src="./img/icon-arrow-down.svg" alt="" className={`${open ? 'rotate-180 transform' : ''} transition-all duration-200`} />
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 pb-2">
            <span>{answer}</span>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
} 