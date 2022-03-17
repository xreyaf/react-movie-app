import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { ContainerStyled } from '../components/styles/Container.styled';
import {
  MediaBannerWrapper,
  MediaDetailsTitle,
  MediaDetailsWrapper,
  PosterStyled,
} from '../components/styles/MediaDetails.styled';
import { useGetDetailsQuery } from '../features/movies/TMDBApi';
import MediaBlockInfoMovie from '../components/MediaBlockInfoMovie';
import MediaBlockInfoTV from '../components/MediaBlockInfoTV';
import ScrollToTop from '../components/ScrollToTop';
import MediaBanner from '../components/MediaBanner';
import Spinner from '../components/Spinner';
import ImgWithFallback, { w500ImagesURL } from '../components/ImgWithFallback';

function MediaDetails() {
  const { ref, inView } = useInView();
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
      <div style={{ position: 'absolute', height: '5px' }} ref={ref} />
      <ContainerStyled>
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
      </ContainerStyled>
    </ScrollToTop>
  );
}

export default MediaDetails;
