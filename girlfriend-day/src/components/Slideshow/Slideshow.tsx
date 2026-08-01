import "./Slideshow.css";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { playClick } from "../../utils/sounds";

// Import your images here
import photo3 from "../../assets/images/maam1.png"; 
import photo1 from "../../assets/images/maam2.png";
import photo2 from "../../assets/images/maam3.jpeg";

interface SlideshowProps {
  onNext: () => void;
}

interface Slide {
  id: number;
  image: string;
  caption: string;
  date?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: photo1,
    caption: "The day it all started... ❤️",
    date: "A special memory",
  },
  {
    id: 2,
    image: photo2,
    caption: "Your smile makes my entire world bright 🌸",
    date: "Unforgettable moment",
  },
  {
    id: 3,
    image: photo3,
    caption: "Here's to a million more memories together ✨",
    date: "Forever to go",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotate: direction > 0 ? 10 : -10,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotate: direction < 0 ? 10 : -10,
    transition: { duration: 0.4 },
  }),
};

export default function Slideshow({ onNext }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);

  const handleNextSlide = () => {
    playClick();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    playClick();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <motion.section
      className="slideshow-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="slideshow-header">
        <h2>Memories We Captured ✨</h2>
        <p>Every moment with you is my favorite story</p>
      </div>

      <div className="slideshow-container">
        {/* Navigation Arrows */}
        <button className="nav-btn prev-btn" onClick={handlePrevSlide}>
          ❮
        </button>

        <div className="polaroid-wrapper">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              className="polaroid-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="photo-frame">
                <img
                  src={slides[currentIndex].image}
                  alt={`Memory ${currentIndex + 1}`}
                />
              </div>
              <div className="polaroid-caption">
                <p className="caption-text">{slides[currentIndex].caption}</p>
                {slides[currentIndex].date && (
                  <span className="caption-date">
                    {slides[currentIndex].date}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="nav-btn next-btn" onClick={handleNextSlide}>
          ❯
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="dots-container">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => {
              playClick();
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>

      {/* Button conditionally renders different label or action */}
      <motion.button
        className="continue-slideshow-btn"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => {
          playClick();
          if (isLastSlide) {
            onNext();
          } else {
            handleNextSlide();
          }
        }}
      >
        <span>
          {isLastSlide ? "Skip to Next Surprise 🎁" : "Next Memory 💕"}
        </span>
      </motion.button>
    </motion.section>
  );
}