import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import useAudio from '../hooks/useAudio';
import Button from './Button';
import { useTheme } from '@emotion/react';
import Heading from './Heading';
import Flex from './Flex';
import styled from '@emotion/styled';

const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
const radioUrl = 'https://relay1.melonradio.ru:9001/deeper';

const VolumeRange = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 1rem;
  margin: auto 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.white100};
  &::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.warning400};
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.warning400};
  }
`;

const Player = () => {
  const { isPlaying, setIsPlaying, volume, setVolume } = useAudio(radioUrl);
  const theme = useTheme();
  return (
    <>
      <Heading>Почувствуй бит</Heading>
      <audio controls>
        <track kind="captions" />
        <source src={url} type="audio/mp3" />
        <p>Ваш браузер не поддерживает HTML5 аудио.</p>
      </audio>
      <Heading>Радиоооооо</Heading>
      <Flex gap="1rem">
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

        <Flex align={'center'}>
          {volume === 0 ? (
            <Unicons.UilVolumeMute size={16} />
          ) : volume < 0.3 ? (
            <Unicons.UilVolumeDown size={16} />
          ) : volume < 0.65 ? (
            <Unicons.UilVolume size={16} />
          ) : (
            <Unicons.UilVolumeUp size={16} />
          )}
          <VolumeRange
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
          />
          <p>{Math.floor(volume * 100)}%</p>
        </Flex>
      </Flex>
    </>
  );
};

export default Player;
