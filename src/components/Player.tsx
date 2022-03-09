import React from "react";
import { ButtonStyled } from "./styles/Button.styled";
import { theme } from "../styles/theme";
import useAudio from "../hooks/useAudio";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";


const url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const Player = () => {
  const { isPlaying, setIsPlaying } = useAudio(url);
  return (
    <>
      <h1>Fill the beat</h1>
      <audio controls>
        <source src={url} type="audio/mp3" />
        <p>Ваш браузер не поддерживает HTML5 аудио.</p>
      </audio>
      <ButtonStyled
        onClick={() => setIsPlaying(!isPlaying)}
        whileHover={{
          backgroundColor: theme.colors.primary500,
          cursor: "pointer"
        }}
      >
        {isPlaying ? (<Unicons.UilPause size={16} />) :
          (<Unicons.UilPlay size={16} />)}
      </ButtonStyled>
    </>
  );
};

export default Player;