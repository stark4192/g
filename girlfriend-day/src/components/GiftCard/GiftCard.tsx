import "./GiftCard.css";
import { motion } from "framer-motion";
import { useState } from "react";
import giftCard from "../../assets/images/gift-card.png";
import { playClick } from "../../utils/sounds";

interface GiftCardProps {
  onNext: () => void;
}

export default function GiftCard({
  onNext,
}: GiftCardProps) {

  const [flipped, setFlipped] = useState(false);

  return (

    <motion.section
      className="gift-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div
  className={`gift-card ${flipped ? "flipped" : ""}`}
  onClick={() => {
    playClick();
    setFlipped(!flipped);
  }}
>
  {/* Front */}

  <div className="card-face card-front">

    <h1>❤️ LOVE PASS ❤️</h1>

    <h2>Exclusive Member</h2>

    <p>Your Beautiful Girl</p>

    <small>Valid Forever ∞</small>

  </div>

  {/* Back */}

  <div className="card-face card-back">

    <img
      src={giftCard}
      alt="Gift Card"
      className="gift-image"
    />

  </div>

</div>
      {flipped && (

        <motion.button
          className="finish-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onNext}
        >
          One Last Surprise ✨
        </motion.button>

      )}

    </motion.section>

  );

}