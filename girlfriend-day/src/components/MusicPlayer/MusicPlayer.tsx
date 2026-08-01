import { useEffect, useRef } from "react";

import backgroundMusic from "../../assets/music/background.mp3";

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {

    const playMusic = () => {
      audioRef.current?.play().catch(() => {});
      window.removeEventListener("click", playMusic);
    };

    window.addEventListener("click", playMusic);

    return () => {
      window.removeEventListener("click", playMusic);
    };

  }, []);

  return (
    <audio
      ref={audioRef}
      src={backgroundMusic}
      loop
    />
  );
}