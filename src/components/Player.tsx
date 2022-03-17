import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { ButtonStyled } from './styles/Button.styled';
import theme from '../styles/theme';
import useAudio from '../hooks/useAudio';

const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';

function Player() {
  const { isPlaying, setIsPlaying } = useAudio(url);
  return (
    <>
      <h1>Feel the beat</h1>
      <audio controls>
        <track kind="captions" />
        <source src={url} type="audio/mp3" />
        <p>Ваш браузер не поддерживает HTML5 аудио.</p>
      </audio>
      <ButtonStyled
        onClick={() => setIsPlaying(!isPlaying)}
        whileHover={{
          backgroundColor: theme.colors.primary500,
          cursor: 'pointer',
        }}
      >
        {isPlaying ? (
          <Unicons.UilPause size={16} />
        ) : (
          <Unicons.UilPlay size={16} />
        )}
      </ButtonStyled>
    </>
  );
}

export default Player;
