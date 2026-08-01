import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Background from "../components/Background/Background";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import Loading from "../components/Loading/Loading";

import Hero from "../components/Hero/Hero";
import ScratchCard from "../components/ScratchCard/ScratchCard";
import Panda from "../components/Panda/Panda";
import GiftCard from "../components/GiftCard/GiftCard";
import Envelope from "../components/Envelope/Envelope";
import Slideshow from "../components/Slideshow/Slideshow";
import Stars from "../components/Stars/Stars";

const Chapter = {
  HERO: "HERO",
  SCRATCH: "SCRATCH",
  PANDA: "PANDA",
  GIFT: "GIFT",
  ENVELOPE: "ENVELOPE",
  SLIDESHOW: "SLIDESHOW",
  STARS: "STARS",
} as const;

type ChapterType = (typeof Chapter)[keyof typeof Chapter];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [chapter, setChapter] = useState<ChapterType>(Chapter.HERO);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const isLastChapter = chapter === Chapter.STARS;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dynamic persistent background */}
      <Background isLastChapter={isLastChapter} />

      {/* Global music player */}
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {chapter === Chapter.HERO && (
          <Hero key="hero" onNext={() => setChapter(Chapter.SCRATCH)} />
        )}

        {chapter === Chapter.SCRATCH && (
          <ScratchCard key="scratch" onComplete={() => setChapter(Chapter.PANDA)} />
        )}

        {chapter === Chapter.PANDA && (
          <Panda key="panda" onNext={() => setChapter(Chapter.GIFT)} />
        )}

        {chapter === Chapter.GIFT && (
          <GiftCard key="gift" onNext={() => setChapter(Chapter.ENVELOPE)} />
        )}

        {chapter === Chapter.ENVELOPE && (
          <Envelope key="envelope" onNext={() => setChapter(Chapter.SLIDESHOW)} />
        )}

        {chapter === Chapter.SLIDESHOW && (
          <Slideshow key="slideshow" onNext={() => setChapter(Chapter.STARS)} />
        )}

        {chapter === Chapter.STARS && (
          <Stars key="stars" />
        )}
      </AnimatePresence>
    </div>
  );
}