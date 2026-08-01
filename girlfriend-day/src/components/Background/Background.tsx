import "./Background.css";

import moon from "../../assets/images/moon.png";
import sparkle from "../../assets/images/sparkle.png";

import FloatingHearts from "../FloatingHearts/FloatingHearts";
import FloatingPetals from "../FloatingPetals/FloatingPetals";

interface BackgroundProps {
  isLastChapter?: boolean;
}

export default function Background({ isLastChapter }: BackgroundProps) {
  return (
    <div className={`background ${isLastChapter ? "black-bg" : ""}`}>
      {/* Hide soft gradients and glows on final slide */}
      {!isLastChapter && (
        <>
          <div className="gradient" />
          <div className="glow glow1" />
          <div className="glow glow2" />
        </>
      )}

      {/* Swap Moon for Sparkle image on final slide */}
      {!isLastChapter ? (
        <img src={moon} className="moon" alt="moon" />
      ) : (
        <img src={sparkle} className="sparkle-bg-image" alt="sparkle background" />
      )}

      {/* Persistent Background Stars on normal slides */}
      {!isLastChapter && (
        <div className="stars-layer">
          {Array.from({ length: 50 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hide floating hearts & petals on final slide */}
      {!isLastChapter && (
        <>
          <FloatingHearts />
          <FloatingPetals />
        </>
      )}
    </div>
  );
}