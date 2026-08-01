import "./Envelope.css";
import { motion } from "framer-motion";
import { useState } from "react";

import envelope from "../../assets/images/envelope.png";
import { playClick } from "../../utils/sounds";

interface EnvelopeProps {
  onNext: () => void;
}

export default function Envelope({ onNext }: EnvelopeProps) {
  const [opened, setOpened] = useState(false);

  const handleEnvelopeClick = () => {
    if (!opened) {
      playClick();
      setOpened(true);
    }
  };

  return (
    <motion.section
      className="envelope-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="envelope-wrapper">
        {/* Letter Paper */}
        <motion.div
          className="letter-paper"
          initial={false}
          animate={{
            y: opened ? -40 : 0,
            scale: opened ? 1.15 : 0.4,
            opacity: opened ? 1 : 0,
            zIndex: opened ? 50 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h3>My Love ❤️</h3>

          <p>
            I don't know if words will ever be enough to describe how special
            you are to me, but I want to try.
          </p>

          <p>
            Thank you for being the person who makes ordinary moments feel
            magical. Your smile brings peace to my busiest days, your laughter
            makes everything brighter, and your presence makes my world a little
            more beautiful.
          </p>

          <p>
            I love the little things about you — the way you talk, the way you
            care, the memories we create, and even the tiny moments that only
            we understand.
          </p>

          <p>
            You are not just someone I love; you are my comfort, my happiness,
            and my favorite person to share life's journey with.
          </p>

          <p>
            On this Girlfriend's Day, I just want you to know that I choose
            you — today, tomorrow, and every day that comes after.
          </p>

          <p>Thank you for being you. ❤️</p>

          <p>
            Forever yours,
            <br />
            Monsoon 💌
          </p>
        </motion.div>

        {/* Envelope */}
        <motion.img
          src={envelope}
          className="envelope"
          alt="Envelope"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          onClick={handleEnvelopeClick}
        />
      </div>

      {!opened ? (
        <p className="hint">Click the envelope 💌</p>
      ) : (
        <motion.button
          className="memories-btn"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          onClick={() => {
            playClick();
            onNext();
          }}
        >
          <span>Memories We Captured ✨</span>
          <small>Click to watch 📸</small>
        </motion.button>
      )}
    </motion.section>
  );
}