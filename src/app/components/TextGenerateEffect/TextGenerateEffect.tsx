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
      <motion.div ref={scope} className="flex flex-wrap justify-center w-[80%] gap-[5px]">
        {wordsArray.map((word, idx) => {
          return (
            <motion.div
              key={word + idx}
              className="text-center text-black font-semibold opacity-0 text-sm md:text-xl font-raleway tracking-wider"
            >
              {word.startsWith("*") ? (
                <span className="font-bold">{word.replace("*", "")}</span>
              ) : word.startsWith("$") ? (
                <span className="font-extrabold">{word.replace("$", "")}</span>
              ) : (
                <span>{word.replace("^", "")}</span>
              )}
              {word.startsWith("^") ? (
                <div className="w-screen">
                  <span>{word.replace("^", "")}</span>
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="flex justify-center text-black text-2xl leading-snug tracking-wide w-screen">{renderWords()}</div>
    </div>
  );
};

export default TextGenerateEffect;
