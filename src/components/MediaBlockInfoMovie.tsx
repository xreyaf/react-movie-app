import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { IDetails } from '../features/movies/types';
import styled from '@emotion/styled';
import moment from 'moment';

export const MediaInfoContainer = styled.div`
  width: 50%;
  padding-left: 5rem;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 0;
  }
  @media ${({ theme }) => theme.media.phone} {
    width: 100%;
    padding: 0;
  }
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
  let release_date = moment(details.release_date).locale('ru').format('LL');
  let { tagline, overview, vote_average, vote_count, budget, runtime, genres } =
    details;
  return (
    <MediaInfoContainer>
      <MediaInfoBlock>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </MediaInfoBlock>
      <MediaInfoRating>
        <Unicons.UilStar size={16} />
        <p>{vote_average}</p>
        <p>({vote_count} оценок)</p>
      </MediaInfoRating>
      <MediaInfoBlock>
        <Label>Бюджет</Label>
        <LargeText>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          }).format(budget)}
        </LargeText>
      </MediaInfoBlock>
      <MediaInfoBlock>
        <Label>Дата выхода</Label>
        <LargeText>{release_date}</LargeText>
      </MediaInfoBlock>
      <MediaInfoBlock>
        <Label>Время</Label>
        <LargeText>{runtime} мин</LargeText>
      </MediaInfoBlock>
      <MediaInfoBlock>
        <Label>Жанры</Label>
        {genres.map((item: any) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </MediaInfoBlock>
    </MediaInfoContainer>
  );
};

export default MediaBlockInfoMovie;
