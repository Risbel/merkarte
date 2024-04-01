import Image from "next/image";
import TextHero from "./components/TextHero";
import ButtonConfirm from "./components/buttons/ButtonConfirm";

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <img
        className="absolute -z-10 object-cover w-full h-full"
        src={"/abstrack_backhround_blue__generated.jpg"}
        alt="background merkarte"
        height={1280}
        width={720}
      />
      <div className="relative z-20 h-screen p-12">
        <div className="h-full border-[8px] border-white shadow-xl">
          <div className="h-full border-[8px] border-white shadow-inner shadow-gray-600 bg-white/50">
            <div className="flex flex-col justify-between items-center h-full pb-4">
              <Image src={"/logo-goma.svg"} alt="logo goma" height={180} width={360} />
              <div className="flex gap-2 w-full px-16">
                <div className="border-b-2 border-black -translate-y-2 flex-1" />
                <p className="text-4xl leading-2 font-light tracking-widest">Presenta</p>
                <div className="border-b-2 border-black -translate-y-2 flex-1" />
              </div>
              <div>
                <h1 className="text-6xl  tracking-wider">MERKARTE</h1>
              </div>

              <div className="flex justify-center px-8">
                <TextHero />
              </div>
              <ButtonConfirm />

              <p className="text-center tracking-widest font-semibold">
                <span className="text-2xl font-bold">13.04.2024</span> <br />
                19 Hrs <br /> Av. Ayyo Nr. 73, local 7, 38670 Adeje
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
