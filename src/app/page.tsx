"use client";

import Image from "next/image";
import TextHero from "./components/TextHero";
import ButtonConfirm from "./components/buttons/ButtonConfirm";
import { motion } from "framer-motion";
import LogoCarousel from "./components/carousel";
import Footer from "./components/footer/Footer";
import Circle from "./components/circle";
import LinkEncoded from "./components/LinkEncoded";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden overflow-y-scroll">
      <LinkEncoded />
      <div className="h-screen w-screen absolute flex justify-start">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={20} translateY={150} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={-150} translateY={-80} />
      </div>

      <div className="h-screen w-screen absolute flex justify-end items-end">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={80} translateY={0} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={100} translateY={80} />
      </div>

      <img
        className="fixed -z-10 object-cover w-screen h-screen"
        src={"/bg-patern-mercarte.png"}
        alt="background merkarte"
        height={1280}
        width={720}
      />
      <div className="relative z-20 p-4 md:p-12 pb-0">
        <div className="h-full border-2 mg:border-[8px] border-white shadow-xl">
          <div className="h-full border-[8px] border-white shadow-inner shadow-gray-600 bg-white/80">
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
                  <h1 className="text-3xl md:text-6xl tracking-wider">
                    <span className="font-bold inline-flex animate-background-shine bg-[linear-gradient(110deg,#000000,45%,#981212,55%,#000000)] bg-[length:250%_100%] bg-clip-text text-transparent">
                      MERKARTE
                    </span>
                  </h1>
                </div>
              </motion.div>
              <div className="flex justify-center px-2 md:px-8 w-screen">
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
