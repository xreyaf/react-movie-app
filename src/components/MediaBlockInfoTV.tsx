import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import {
  MediaInfoBlock,
  MediaInfoContainer,
  MediaInfoRating,
  MediaFlex,
  Label,
  LargeText,
  Logo,
} from './styles/MediaDetails.styled';
import { IDetails } from '../features/movies/types';

import { w500ImagesURL } from './ImgWithFallback';

function MediaBlockInfoTV(details: IDetails) {
  return (
    <MediaInfoContainer>
      <MediaInfoBlock>
        <h4>{details.tagline}</h4>
        <p>{details.overview}</p>
      </MediaInfoBlock>
      <MediaInfoRating>
        <Unicons.UilStar size={16} />
        <p>{details.vote_average}</p>
        <p>({details.vote_count} votes)</p>
      </MediaInfoRating>
      <MediaFlex>
        <MediaInfoBlock>
          <Label>Network</Label>
          <a href={details.homepage}>
            <Logo>
              <img
                style={{ display: 'block', verticalAlign: 'center' }}
                src={w500ImagesURL + details.networks[0].logo_path}
                alt={details.networks[0].name}
              />
            </Logo>
          </a>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Status</Label>
          <LargeText>{details.status}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>

      <MediaFlex>
        <MediaInfoBlock>
          <Label>First air date</Label>
          <LargeText>{details.first_air_date}</LargeText>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Last air date</Label>
          <LargeText>{details.last_air_date}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>
      <MediaFlex>
        <MediaInfoBlock>
          <Label>No. of seasons</Label>
          <LargeText>{details.number_of_seasons}</LargeText>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>No. of episodes</Label>
          <LargeText>{details.number_of_episodes}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>
      <MediaInfoBlock>
        <Label>Genres</Label>
        {details.genres.map((item: any) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </MediaInfoBlock>
    </MediaInfoContainer>
  );
}

export default MediaBlockInfoTV;
