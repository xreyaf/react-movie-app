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
import moment from 'moment';

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
  let first_air_date = moment(details.first_air_date).locale('ru').format('LL');
  let last_air_date = moment(details.last_air_date).locale('ru').format('LL');
  let {
    tagline,
    overview,
    vote_average,
    vote_count,
    homepage,
    networks,
    status,
    number_of_seasons,
    number_of_episodes,
    genres,
  } = details;
  return (
    <MediaInfoContainer>
      <MediaInfoBlock>
        <h4>{tagline}</h4>
        <p>{overview}</p>
      </MediaInfoBlock>
      <MediaInfoRating>
        <Unicons.UilStar size={16} />
        <p>{vote_average}</p>
        <p>({vote_count} оценок)</p>
      </MediaInfoRating>
      <MediaFlex>
        <MediaInfoBlock>
          <Label>Сервис</Label>
          <a href={homepage}>
            <Logo>
              <img
                style={{ display: 'block', verticalAlign: 'center' }}
                src={w500ImagesURL + networks[0].logo_path}
                alt={networks[0].name}
              />
            </Logo>
          </a>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Статус</Label>
          <LargeText>{status}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>

      <MediaFlex>
        <MediaInfoBlock>
          <Label>Первый эфир</Label>
          <LargeText>{first_air_date}</LargeText>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Последний эфир</Label>
          <LargeText>{last_air_date}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>
      <MediaFlex>
        <MediaInfoBlock>
          <Label>Число сезонов</Label>
          <LargeText>{number_of_seasons}</LargeText>
        </MediaInfoBlock>
        <MediaInfoBlock>
          <Label>Число эпизодов</Label>
          <LargeText>{number_of_episodes}</LargeText>
        </MediaInfoBlock>
      </MediaFlex>
      <MediaInfoBlock>
        <Label>Жанры</Label>
        {genres.map((item: any) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </MediaInfoBlock>
    </MediaInfoContainer>
  );
}

export default MediaBlockInfoTV;
