import Link from "next/link";
import FormConfirm from "./components/form/FormConfirm";
import { ChevronLeftIcon } from "lucide-react";
import Circle from "../components/circle";

const Confirm = async () => {
  return (
    <div>
      <Link
        className="top-2 left-2 fixed flex items-center z-[40] pr-3 py-2 bg-black hover:bg-red-950 hover:shadow-xl transition-color duration-300 rounded-lg"
        href={"/"}
      >
        <ChevronLeftIcon stroke="white" />
        <span className="text-xl text-white"> back</span>
      </Link>

      <div className="flex w-full justify-center items-center pt-16 md:pt-8">
        <FormConfirm />
      </div>
    </div>
  );
};

export default Confirm;
