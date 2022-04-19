import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { IDetails } from '../features/movies/types';
import { w500ImagesURL } from './ImgWithFallback';
import styled from '@emotion/styled';
import {
  Label,
  LargeText,
  MediaInfoBlock,
  MediaInfoContainer,
  MediaInfoRating,
} from './MediaBlockInfoMovie';

const MediaFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  background-color: ${(props) => props.theme.colors.white20};
  border-radius: 1rem;
  padding: 0.6rem;
  width: 60%;
`;

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
        <p>({details.vote_count} оценок)</p>
      </MediaInfoRating>
      <MediaFlex>
        <MediaInfoBlock>
          <Label>Сервис</Label>
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
          <Label>Статус</Label>
          <LargeText>{details.status}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>

      <MediaFlex>
        <MediaInfoBlock>
          <Label>Первый эфир</Label>
          <LargeText>{details.first_air_date}</LargeText>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Последний эфир</Label>
          <LargeText>{details.last_air_date}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>
      <MediaFlex>
        <MediaInfoBlock>
          <Label>Число сезонов</Label>
          <LargeText>{details.number_of_seasons}</LargeText>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Число эпизодов</Label>
          <LargeText>{details.number_of_episodes}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>
      <MediaInfoBlock>
        <Label>Жанры</Label>
        {details.genres.map((item: any) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </MediaInfoBlock>
    </MediaInfoContainer>
  );
}

export default MediaBlockInfoTV;
