import Link from "next/link";
import FormConfirm from "./components/form/FormConfirm";
import { ChevronLeftIcon } from "lucide-react";

const Confirm = async () => {
  return (
    <div className="relative">
      <Link
        className="absolute flex items-center z-[40] pr-3 md:py-2 bg-blue-900 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-color duration-300 rounded-lg"
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
