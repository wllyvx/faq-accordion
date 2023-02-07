"use client"
import { Disclosure } from "@headlessui/react"

type ItemProps = {
    id: number
    question: string
    answer: string
}

export default function AccordionItems({id, question, answer} : ItemProps) {
    return (
        <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2 text-left flex items-center justify-between w-full">
              <span className={`${open ? 'font-bold' : ''} hover:font-bold`}>{question}</span>
              <img src="./img/icon-arrow-down.svg" alt="" className={`${open ? 'rotate-180 transform' : ''} transition-all duration-200`} />
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
            <span>{answer}</span>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
} 