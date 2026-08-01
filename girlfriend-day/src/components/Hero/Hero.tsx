import "./Hero.css";
import { motion } from "framer-motion";
import { playClick } from "../../utils/sounds";

interface HeroProps {
  onNext: () => void;
}

export default function Hero({ onNext }: HeroProps) {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero-card"
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.p
          className="hero-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ❤️ A Little Surprise ❤️
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Happy Girlfriend's Day
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Every love story is beautiful,
          <br />
          but ours is my favorite.
        </motion.p>

        <motion.button
          className="hero-btn"
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
              playClick();
              onNext();
            }}
        >
          Begin Journey ✨
        </motion.button>
      </motion.div>
    </motion.section>
  );
}