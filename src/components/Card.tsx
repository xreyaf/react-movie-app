import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { CardImageWrapper, CardInfo, CardStyled } from './styles/Card.styled';
import { ICard } from '../features/movies/types';
import { RatingStyled } from './styles/Rating.styled';
import ImgWithFallback, { w500ImagesURL } from './ImgWithFallback';

function Card({ item, type }: { item: ICard; type: string }) {
  return (
    <CardStyled
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -3 }}
    >
      <Link to={`/${type}/${item.id}`}>
        <RatingStyled>
          <Unicons.UilStar size={16} />
          <p>{item.vote_average}</p>
        </RatingStyled>
        <CardImageWrapper>
          <ImgWithFallback
            src={w500ImagesURL + item.poster_path}
            alt={item.title || item.name}
            whileHover={{ scale: 1.05 }}
          />
        </CardImageWrapper>
        <CardInfo>
          <p>{item.title || item.name}</p>
        </CardInfo>
      </Link>
    </CardStyled>
  );
}

export default Card;
