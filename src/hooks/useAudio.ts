import { useEffect, useRef, useState } from 'react';

const useAudio = (url: string | undefined) => {
  const audio = useRef(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);
  audio.current.volume = 0.2;
  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.current.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.current.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return { isPlaying, setIsPlaying };
};

export default useAudio;
