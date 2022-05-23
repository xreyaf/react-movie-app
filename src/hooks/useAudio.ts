import { useEffect, useRef, useState } from 'react';

const useAudio = (url: string | undefined) => {
  const audio = useRef(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause();
    audio.current.volume = volume;
  }, [isPlaying, volume]);

  useEffect(() => {
    audio.current.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.current.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return { isPlaying, setIsPlaying, volume, setVolume };
};

export default useAudio;
