import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { IDetails } from '../features/movies/types';
import styled from '@emotion/styled';

export const MediaInfoContainer = styled.div`
  width: 50%;
  padding-left: 5rem;
`;

export const MediaInfoBlock = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  span {
    color: ${(props) => props.theme.colors.grey50};
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;

    &:not(:first-of-type) {
      &::before {
        content: ', ';
      }
    }
  }
`;

export const Label = styled.p`
  color: ${(props) => props.theme.colors.grey400};
`;
export const LargeText = styled.p`
  color: ${(props) => props.theme.colors.grey50};
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 400;
`;

export const MediaInfoRating = styled.div`
  padding: 0.6rem;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  border-radius: 0.6rem;
  gap: 0.6rem;
  background-color: ${(props) => props.theme.colors.black65};
  color: ${(props) => props.theme.colors.warning500};

  p {
    color: ${(props) => props.theme.colors.warning500};
  }
`;

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
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
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
        {details.genres.map((item: any) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </MediaInfoBlock>
    </MediaInfoContainer>
  );
};

export default MediaBlockInfoMovie;
