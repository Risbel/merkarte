import { Loader, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const ConfirmButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="my-2 hover:shadow-xl shadow-slate-800 hover:-translate-y-1 duration-300 transition-all inline-flex h-12 animate-background-shine items-center justify-center rounded-xl bg-[linear-gradient(110deg,#000000,45%,#6d1111,55%,#000000)] bg-[length:200%_100%] font-bold text-white"
      type="submit"
    >
      <span className="font-semibold text-secondary">
        {!pending ? "confirm" : <Loader className="animate-spin stroke-secondary" />}
      </span>
    </button>
  );
};

export default ConfirmButton;
