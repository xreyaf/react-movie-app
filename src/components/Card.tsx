import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { ICard } from '../features/movies/types';
import ImgWithFallback, { w500ImagesURL } from './ImgWithFallback';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Modal from './Modal';
import Heading from './Heading';

const CardStyled = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey900_90};
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
    color: ${({ theme }) => theme.colors.grey50};
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.white100};
      transition: color 0.3s;
    }
  }
`;

const Rating = styled.div`
  color: ${({ theme }) => theme.colors.warning400};
  background-color: ${({ theme }) => theme.colors.black75};
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
  svg {
    display: block;
  }
  p {
    color: ${({ theme }) => theme.colors.warning400};
  }
`;

const Favourite = styled.div`
  color: ${({ theme }) => theme.colors.error500};
  background-color: ${({ theme }) => theme.colors.black75};
  border-radius: 0.5rem;
  z-index: 2;
  top: 0.6rem;
  right: 0.6rem;
  position: absolute;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white75};
    transition: all 0.2s;
  }
  svg {
    display: block;
  }
`;

const Card = ({ item, type }: { item: ICard; type: string }) => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <Modal isActive={isActive} close={() => setActive(false)}>
        <Heading>Excellent!</Heading>
        <p>Your list of favourites has been updated</p>
      </Modal>
      <CardStyled
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { type: 'spring', stiffness: 300 } }}
      >
        <Favourite onClick={() => setActive(true)}>
          <Unicons.UilHeart size={16} />
        </Favourite>

        <Link to={`/${type}/${item.id}`}>
          <Rating>
            <Unicons.UilStar size={16} />
            <p>{item.vote_average}</p>
          </Rating>
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
    </>
  );
};

export default Card;
