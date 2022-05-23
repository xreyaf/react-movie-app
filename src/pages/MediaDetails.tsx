import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { useNavigate, useParams } from 'react-router-dom';
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
import Heading from '../components/Heading';
import { ButtonDisabled } from '../components/Button';
import { theme } from '../styles/theme';
import { Space } from '../components/layouts/Space';

const MediaBannerWrapper = styled(motion.div)`
  width: 100%;
  height: auto;
  border-radius: 2rem;
  overflow: hidden;
  z-index: 1;
`;

const PosterStyled = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 3rem;
  overflow: hidden;
  z-index: 1;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 90%;
  }
  @media ${({ theme }) => theme.media.phone} {
    width: 100%;
    height: 90%;
  }
`;

const MediaDetailsTitle = styled(motion.div)`
  position: relative;
  z-index: 2;
  padding: 2.5rem;
  border-radius: 2rem;
  width: 100%;
  max-width: 700px;
  margin-top: -4.5rem;
  margin-left: 5rem;
  background: ${({ theme }) => theme.colors.grey900_80};
  backdrop-filter: blur(24px);
  @media ${({ theme }) => theme.media.tablet} {
    padding: 1rem;
    margin: 1rem 0 0 0;
    transform: translateY(0) !important;
  }
  @media ${({ theme }) => theme.media.phone} {
    padding: 0.1rem;
    margin: 1rem 0 0 0;
    transform: translateY(0) !important;
  }
`;

export const MediaDetailsWrapper = styled(motion.div)`
  margin: 5rem;
  display: flex;
  @media ${({ theme }) => theme.media.largeDesktop} {
    margin: 5rem 2rem;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin: 2rem 0 0 0;
    flex-direction: column-reverse;
    transform: translateY(0) !important;
  }
  @media ${({ theme }) => theme.media.phone} {
    margin: 1rem 0 0 0;
    flex-direction: column-reverse;
    transform: translateY(0) !important;
  }
`;

const MediaDetails = () => {
  const navigate = useNavigate();

  const animateElement = useRef(null);
  const inView = useInView(animateElement);
  const animation = useAnimation();
  const { mediaType, id } = useParams();
  const {
    data: details,
    isLoading,
    error,
  } = useGetDetailsQuery({ mediaType, id });
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 817;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    if (width > breakpoint) {
      animation.start({
        y: inView ? '6rem' : 0,
        transition: {
          type: 'ease-out',
          duration: 0.5,
        },
      });
    }
  }, [inView]);

  return (
    <ScrollToTop>
      <div
        style={{ position: 'absolute', height: '5px' }}
        ref={animateElement}
      />
      <Container>
        {isLoading && (
          <>
            <Spinner />
            <Space />
          </>
        )}
        {error && (
          <>
            <Heading>Произошла ошибка...</Heading>
            <Space />
          </>
        )}
        {details && (
          <>
            <MediaBannerWrapper>
              <MediaBanner mediaType={mediaType} id={id} />
            </MediaBannerWrapper>
            <MediaDetailsTitle animate={animation} initial={{ y: '6rem' }}>
              <Heading>{details.title || details.name}</Heading>
            </MediaDetailsTitle>

            <MediaDetailsWrapper animate={animation} initial={{ y: '6rem' }}>
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
            <ButtonDisabled
              onClick={() => navigate(-1)}
              whileHover={{
                backgroundColor: theme.colors.grey900,
                cursor: 'pointer',
                y: 3,
              }}
            >
              Вернуться назад
            </ButtonDisabled>
          </>
        )}
      </Container>
    </ScrollToTop>
  );
};

export default MediaDetails;
