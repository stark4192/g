import "./ScratchCard.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { playScratch, playPop } from "../../utils/sounds";

interface ScratchCardProps {
  onComplete: () => void;
}

export default function ScratchCard({
  onComplete,
}: ScratchCardProps) {

    

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;
    const safeCanvas = canvas;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    const context = ctx;

    safeCanvas.width = 420;
    safeCanvas.height = 240;

    context.fillStyle = "#cfcfcf";
    context.fillRect(0, 0, safeCanvas.width, safeCanvas.height);

    context.fillStyle = "#9e9e9e";
    context.font = "bold 32px Poppins";
    context.textAlign = "center";
    context.fillText(
      "Scratch Here ❤️",
      safeCanvas.width / 2,
      safeCanvas.height / 2
    );

    let scratching = false;

    function scratch(
      e: MouseEvent | TouchEvent
    ) {


      if (!scratching) return;

      const rect = safeCanvas.getBoundingClientRect();

      const x =
        "touches" in e
          ? e.touches[0].clientX - rect.left
          : e.clientX - rect.left;

      const y =
        "touches" in e
          ? e.touches[0].clientY - rect.top
          : e.clientY - rect.top;

      context.globalCompositeOperation =
        "destination-out";

      context.beginPath();

      context.arc(x, y, 24, 0, Math.PI * 2);

      context.fill();

      checkReveal(context, safeCanvas);
    }

    function checkReveal(
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement
    ) {

      const pixels =
        ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        ).data;

      let transparent = 0;

      for (
        let i = 3;
        i < pixels.length;
        i += 4
      ) {
        if (pixels[i] === 0) transparent++;
      }

      const percent =
        transparent /
        (canvas.width * canvas.height);

      if (
        percent > 0.55 &&
        !revealed
      ) {

        setRevealed(true);


        confetti({
          particleCount: 180,
          spread: 90,
          origin: { y: 0.6 },
        });

      }
    }

    canvas.onmousedown = () =>
      (scratching = true);

    canvas.onmouseup = () =>
      (scratching = false);

    canvas.onmousemove = scratch;

    canvas.ontouchstart = () =>
      (scratching = true);

    canvas.ontouchend = () =>
      (scratching = false);

    canvas.ontouchmove = scratch;

  }, [revealed]);

  return (

    <motion.section
      className="scratch-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        className="scratch-card"
        initial={{ scale: .85 }}
        animate={{ scale: 1 }}
      >

        <div className="hidden-message">

          <h2>
            🎉 You unlocked
            a surprise!
          </h2>

          <p>
            A little panda has
            something for you ❤️
          </p>

        </div>

        <canvas
          ref={canvasRef}
          className={
            revealed
              ? "fade-out"
              : ""
          }
        />

      </motion.div>

      {revealed && (

        <motion.button
          className="continue-btn"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          onClick={onComplete}
        >
          Continue →
        </motion.button>

      )}

    </motion.section>

  );

}