import Accordion from "./Accordion";

export default function Card() {
    return (
        <div className="bg-white text-dark flex flex-col items-center justify-center w-full">
            <h1 className="text-black text-3xl font-semibold">FAQ</h1>
            <Accordion />
        </div>
    )
}