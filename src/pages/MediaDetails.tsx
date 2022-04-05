import React, { useEffect, useRef } from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useGetDetailsQuery } from '../features/movies/TMDBApi';
import MediaBlockInfoMovie from '../components/MediaBlockInfoMovie';
import MediaBlockInfoTV from '../components/MediaBlockInfoTV';
import ScrollToTop from '../components/ScrollToTop';
import MediaBanner from '../components/MediaBanner';
import Spinner from '../components/Spinner';
import ImgWithFallback, { w500ImagesURL } from '../components/ImgWithFallback';
import useInView from '../hooks/useInView';
import Container from '../components/Container';
import styled from '@emotion/styled';

const MediaBannerWrapper = styled(motion.div)`
  width: 100%;
  height: auto;
  border-radius: 2rem;
  overflow: hidden;
  z-index: 1;
`;
const PosterStyled = styled.div`
  width: 50%;
  height: 720px;
  border-radius: 3rem;
  overflow: hidden;
  z-index: 1;
`;

const MediaDetailsTitle = styled(motion.div)`
  position: relative;
  z-index: 2;
  padding: 40px;
  border-radius: 2rem;
  width: 100%;
  max-width: 560px;
  margin-top: -4.5rem;
  margin-left: 5rem;
  background: ${({ theme }) => theme.colors.grey900_80};
  backdrop-filter: blur(24px);
`;

export const MediaDetailsWrapper = styled(motion.div)`
  margin: 5rem;
  display: flex;

  @media ${({ theme }) => theme.media.largeDesktop} {
    margin: 5rem 2rem;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin: 5rem 0;
  }
  @media ${({ theme }) => theme.media.phone} {
    margin: 5rem 0;
  }
`;

const MediaDetails = () => {
  const animateElement = useRef(null);
  const inView = useInView(animateElement);
  const animation = useAnimation();
  const { mediaType, id } = useParams();
  const {
    data: details,
    isLoading,
    error,
  } = useGetDetailsQuery({ mediaType, id });

  useEffect(() => {
    animation.start({
      y: inView ? 90 : 0,
      transition: {
        type: 'ease-out',
        duration: 0.5,
      },
    });
  }, [inView]);

  return (
    <ScrollToTop>
      <div
        style={{ position: 'absolute', height: '5px' }}
        ref={animateElement}
      />
      <Container>
        {isLoading && <Spinner />}
        {error && <h3>Some error occurred...</h3>}
        {details && (
          <>
            <MediaBannerWrapper>
              <MediaBanner mediaType={mediaType} id={id} />
            </MediaBannerWrapper>
            <MediaDetailsTitle animate={animation} initial={{ y: 90 }}>
              <h2>{details.title || details.name}</h2>
            </MediaDetailsTitle>

            <MediaDetailsWrapper animate={animation} initial={{ y: 90 }}>
              <PosterStyled>
                <ImgWithFallback
                  src={w500ImagesURL + details.poster_path}
                  alt={details.title || details.name}
                />
              </PosterStyled>
              {mediaType === 'movie' ? (
                <MediaBlockInfoMovie {...details} />
              ) : (
                <MediaBlockInfoTV {...details} />
              )}
            </MediaDetailsWrapper>
          </>
        )}
      </Container>
    </ScrollToTop>
  );
};

export default MediaDetails;
