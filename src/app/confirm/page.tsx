import Link from "next/link";
import FormConfirm from "./components/form/FormConfirm";
import { ChevronLeftIcon } from "lucide-react";
import Circle from "../components/circle";

const Confirm = async () => {
  return (
    <div className="relative">
      <div className="absolute h-screen w-screen flex justify-end items-end">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={-180} translateY={-300} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={-120} translateY={-200} />
      </div>
      <Link
        className="absolute flex items-center z-[40] pr-3 md:py-2 bg-black hover:bg-red-950 hover:-translate-y-1 hover:shadow-xl transition-color duration-300 rounded-lg"
        href={"/"}
      >
        <ChevronLeftIcon stroke="white" />
        <span className="text-xl font-semibold text-white"> back</span>
      </Link>

      <div className="flex w-full justify-center items-start pt-16 md:pt-8">
        <FormConfirm />
      </div>
    </div>
  );
};

export default Confirm;
