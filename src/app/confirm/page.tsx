import Link from "next/link";
import FormConfirm from "./components/form/FormConfirm";

const Confirm = async () => {
  return (
    <div className="relative">
      <Link
        className="absolute z-[40] px-4 py-2 bg-blue-900 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-color duration-300 rounded-lg"
        href={"/"}
      >
        <span className="text-xl font-semibold text-white"> back</span>
      </Link>

      <div className="flex w-full justify-center items-start pt-8">
        <FormConfirm />
      </div>
    </div>
  );
};

export default Confirm;
