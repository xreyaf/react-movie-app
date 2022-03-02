import React from "react";
import { MediaInfoBlock, MediaInfoContainer, MediaInfoRating, Label, LargeText } from "./styles/MediaDetails.styled";
import { IDetails } from "../features/movies/types";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";

const MediaBlockInfoMovie = (details: IDetails) => {
  return (
    <MediaInfoContainer>
      <MediaInfoBlock>
        <h3>{details.tagline}</h3>
        <p>{details.overview}</p>
      </MediaInfoBlock>
      <MediaInfoRating>
        <Unicons.UilStar size={16} />
        <p>{details.vote_average}</p>
        <p>({details.vote_count} votes)</p>
      </MediaInfoRating>
      <MediaInfoBlock>
        <Label>Budget</Label>
        <LargeText>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
          }).format(details.budget)}
        </LargeText>
      </MediaInfoBlock>
      <MediaInfoBlock>
        <Label>Release Date</Label>
        <LargeText>{details.release_date}</LargeText>
      </MediaInfoBlock>
      <MediaInfoBlock>
        <Label>Runtime</Label>
        <LargeText>{details.runtime} min</LargeText>
      </MediaInfoBlock>
      <MediaInfoBlock>
        <Label>Genres</Label>
        {
          details.genres.map((item: any) => <span key={item.id}>{item.name}</span>)
        }
      </MediaInfoBlock>
    </MediaInfoContainer>
  );
};

export default MediaBlockInfoMovie;