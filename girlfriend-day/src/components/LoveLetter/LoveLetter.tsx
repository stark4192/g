import "./LoveLetter.css";
import { motion } from "framer-motion";

interface LoveLetterProps {
  onNext: () => void;
}

export default function LoveLetter({ onNext }: LoveLetterProps) {

  return (

    <motion.section
      className="letter-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        className="letter"
        initial={{
          scale: .8,
          opacity:0
        }}
        animate={{
          scale:1,
          opacity:1
        }}
      >

<h2>Dear Love ❤️</h2>

<p>

Thank you for making ordinary days feel magical.

Thank you for every laugh,

every smile,

every memory.

You are one of the best things that ever happened to me.

Happy Girlfriend's Day ❤️

</p>

<button onClick={onNext}>
Reveal Your Gift 🎁
</button>

      </motion.div>

    </motion.section>

  );

}