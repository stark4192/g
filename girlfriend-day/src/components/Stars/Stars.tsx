import { motion } from "framer-motion";
import { useState } from "react";
import { playClick } from "../../utils/sounds";
import "./Stars.css";

import fullMoon from "../../assets/images/moon.png";

interface StarsProps {
  onNext?: () => void;
}

export default function Stars({ onNext }: StarsProps) {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isNoMoved, setIsNoMoved] = useState(false);
  const [saidYes, setSaidYes] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    setNoBtnPosition({ x: randomX, y: randomY });
    setIsNoMoved(true);
  };

  const handleYesClick = () => {
    playClick();
    setSaidYes(true);
    if (onNext) {
      setTimeout(() => {
        onNext();
      }, 4000);
    }
  };

  return (
    <motion.section
      className="stars-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="question-wrapper">
        {!saidYes ? (
          <>
            {/* Glowing White Text Question */}
            <motion.h2
              className="question-text"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              Do you love me? 🥺❤️
            </motion.h2>

            <div className="buttons-container">
              {/* YES BUTTON */}
              <motion.button
                className="btn-yes"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
              >
                Yes! 💖
              </motion.button>

              {/* NO BUTTON */}
              <motion.button
                className="btn-no"
                animate={
                  isNoMoved ? { x: noBtnPosition.x, y: noBtnPosition.y } : {}
                }
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                onTouchStart={moveNoButton}
              >
                No 😜
              </motion.button>
            </div>
          </>
        ) : (
          /* SUCCESS MESSAGE & CUTE MOON */
          <motion.div
            className="success-message"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <motion.img
              src={fullMoon}
              alt="Cute Full Moon"
              className="moon-success-img"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <h2 className="success-title">I knew it! 🥰✨</h2>
            <p className="success-text">
              I love you to the moon and back, forever & always! 🌙❤️
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}