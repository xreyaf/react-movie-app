import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import useAudio from '../hooks/useAudio';
import Button from './Button';
import { useTheme } from '@emotion/react';

const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';

const Player = () => {
  const { isPlaying, setIsPlaying } = useAudio(url);
  const theme = useTheme();
  return (
    <>
      <h1>Feel the beat</h1>
      <audio controls>
        <track kind="captions" />
        <source src={url} type="audio/mp3" />
        <p>Ваш браузер не поддерживает HTML5 аудио.</p>
      </audio>
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        whileHover={{
          backgroundColor: theme.colors.primary500,
          cursor: 'pointer',
        }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? (
          <Unicons.UilPause size={16} />
        ) : (
          <Unicons.UilPlay size={16} />
        )}
      </Button>
    </>
  );
};

export default Player;
