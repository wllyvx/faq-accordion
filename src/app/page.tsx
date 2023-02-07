import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-start px-6 pt-32">
      <Card />
      <footer className="absolute bottom-0 mx-auto w-full text-xs md:text-base text-center text-white">
        <span>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="font-bold">
            Frontend Mentor
          </a>
           . Coded by <a href="https://github.com/wllyvx" target="_blank" className="font-bold">Willy Fajar Ramadhan</a>.
        </span>
      </footer>
    </main>
  );
}
