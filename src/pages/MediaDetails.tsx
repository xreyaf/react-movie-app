import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import {
  MediaDetailsBanner,
  MediaDetailsTitle,
  MediaDetailsWrapper, PosterStyled
} from "../components/styles/MediaDetails.styled";
import { useGetDetailsQuery } from "../features/movies/TMDBApi";
import { useParams } from "react-router-dom";
import { ImageStyled } from "../components/styles/Card.styled";
import { w500ImagesURL } from "../components/Card";

// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import MediaBlockInfoMovie from "../components/MediaBlockInfoMovie";
import MediaBlockInfoTV from "../components/MediaBlockInfoTV";


export const w1280ImagesURL = "https://image.tmdb.org/t/p/w1280";

const MediaDetails = () => {
  const { mediaType, id } = useParams();
  const { data: details, isLoading, error } = useGetDetailsQuery({ mediaType, id });

  return (
    <ContainerStyled>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Some error occurred...</h3>}
      {details && <>
        <MediaDetailsBanner>
          <ImageStyled src={w1280ImagesURL + details.backdrop_path} alt={details.title || details.name} />
        </MediaDetailsBanner>
        <MediaDetailsTitle>
          <h2>{details.title || details.name}</h2>
        </MediaDetailsTitle>

        <MediaDetailsWrapper>
          <PosterStyled>
            <ImageStyled src={w500ImagesURL + details.poster_path}
                         alt={details.title || details.name} />
          </PosterStyled>
          {mediaType === "movie" ? <MediaBlockInfoMovie {...details} /> : <MediaBlockInfoTV {...details} />}
        </MediaDetailsWrapper>
      </>
      }
    </ContainerStyled>
  );
};

export default MediaDetails;