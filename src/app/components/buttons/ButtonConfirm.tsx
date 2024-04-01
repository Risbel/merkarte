import Link from "next/link";

const ButtonConfirm = () => {
  return (
    <Link
      href={"/confirm"}
      className="hover:shadow-xl shadow-slate-800 hover:-translate-y-1 duration-300 transition-all inline-flex h-10 md:h-12 animate-background-shine items-center justify-center rounded-xl bg-[linear-gradient(110deg,#1f5184,45%,#3c74ac,55%,#1f5184)] bg-[length:200%_100%] px-4 md:px-6 font-bold text-white"
    >
      Confirmar
    </Link>
  );
};

export default ButtonConfirm;
