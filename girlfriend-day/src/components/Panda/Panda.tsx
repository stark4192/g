import "./Panda.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { playClick } from "../../utils/sounds";

import panda from "../../assets/images/panda.png";
import flowers from "../../assets/images/flowers.png";

interface PandaProps {
  onNext: () => void;
}

export default function Panda({ onNext }: PandaProps) {

  const [showSpeech, setShowSpeech] = useState(false);

  return (
    <motion.section
      className="panda-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.img
        src={panda}
        className="panda"
        alt="Panda"
        initial={{
          x: -500
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 2,
          ease: "easeOut"
        }}
        onAnimationComplete={() =>
          setShowSpeech(true)
        }
      />

      {showSpeech && (

        <>
          <motion.img
            src={flowers}
            className="flowers"
            alt="Flowers"
            initial={{
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: .8
            }}
          />

          <motion.div
            className="speech"

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}
          >
            🌸

            These flowers are for
            the most amazing girl ❤️

          </motion.div>

          <motion.button
            className="continue"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:.5
            }}

            onClick={() => {
              playClick();
              onNext();
            }}
          >

            Open Your Gift 🎁

          </motion.button>

        </>

      )}

    </motion.section>
  );

}