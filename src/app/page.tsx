"use client";

import Image from "next/image";
import TextHero from "./components/TextHero";
import ButtonConfirm from "./components/buttons/ButtonConfirm";
import { motion } from "framer-motion";
import LogoCarousel from "./components/carousel";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden overflow-y-scroll">
      <img
        className="fixed -z-10 object-cover w-screen h-screen"
        src={"/abstrack_backhround_blue__generated.jpg"}
        alt="background merkarte"
        height={1280}
        width={720}
      />
      <div className="relative z-20 p-4 md:p-12 pb-0">
        <div className="h-full border-2 mg:border-[8px] border-white shadow-xl">
          <div className="h-full border-[8px] border-white shadow-inner shadow-gray-600 bg-white/50">
            <div className="flex gap-2 md:gap-4 flex-col justify-between items-center pb-4">
              <motion.div
                className="flex flex-col justify-between items-center gap-4 w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="h-20 w-40 md:h-40 md:w-80 translate-y-4 md:translate-y-0"
                  src={"/logo-goma.svg"}
                  alt="logo goma"
                  height={180}
                  width={360}
                />

                <div className="flex gap-2 w-full px-8 md:px-16">
                  <div className="border-b-2 border-black -translate-y-2 flex-1" />
                  <p className="text-xl md:text-4xl leading-2 font-light tracking-widest">Presenta</p>
                  <div className="border-b-2 border-black -translate-y-2 flex-1" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-6xl tracking-wider">MERKARTE</h1>
                </div>
              </motion.div>
              <div className="flex justify-center px-2 md:px-8">
                <TextHero />
              </div>
              <motion.div
                className="flex flex-col gap-4 items-center"
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <ButtonConfirm />

                <p className="text-center tracking-widest font-semibold text-xs md:text-base">
                  <span className="text-xl md:text-2xl font-bold">13.04.2024</span> <br />
                  19 Hrs <br /> Av. Ayyo Nr. 73, local 7, 38670 Adeje
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <Footer />
    </main>
  );
}
