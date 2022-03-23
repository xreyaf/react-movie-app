import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { ICard } from '../features/movies/types';
import ImgWithFallback, { w500ImagesURL } from './ImgWithFallback';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const CardStyled = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey900_90};
  width: 100%;
  min-height: 100%;
`;
const CardImageWrapper = styled.div`
  display: inline-block;
  border-radius: 1rem;
  width: 100%;
  height: 88%;
  overflow: hidden;
`;

const CardInfo = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  overflow: hidden;

  p {
    color: ${(props) => props.theme.colors.grey50};
    font-weight: 600;

    &:hover {
      color: ${(props) => props.theme.colors.white100};
      transition: color 0.3s;
    }
  }
`;

const RatingStyled = styled.div`
  color: ${(props) => props.theme.colors.warning400};
  background-color: ${(props) => props.theme.colors.black75};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.1rem;
  z-index: 2;
  top: 0.6rem;
  left: 0.6rem;
  position: absolute;
  padding: 0.25rem 0.5rem;
  p {
    color: ${(props) => props.theme.colors.warning400};
  }
`;

const Card = ({ item, type }: { item: ICard; type: string }) => {
  return (
    <CardStyled
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ scale: { type: 'spring', stiffness: 300 } }}
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
          />
        </CardImageWrapper>
        <CardInfo>
          <p>{item.title || item.name}</p>
        </CardInfo>
      </Link>
    </CardStyled>
  );
};

export default Card;
