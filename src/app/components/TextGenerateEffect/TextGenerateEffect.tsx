import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "div",
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.02),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap justify-center gap-[5px]">
        {wordsArray.map((word, idx) => {
          return (
            <motion.div
              key={word + idx}
              className="text-center text-black font-normal opacity-0 text-sm md:text-xl font-raleway tracking-widest"
            >
              {word.startsWith("*") ? (
                <span className="font-semibold">{word.replace("*", "")}</span>
              ) : (
                <span>{word}</span>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
