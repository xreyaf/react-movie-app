import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  useGetBackdropQuery,
  useGetVideosQuery,
} from '../features/movies/TMDBApi';
import React, { useEffect, useState } from 'react';
import { Keyboard, Lazy, Navigation } from 'swiper';
import YoutubeEmbed from './YoutubeEmbed';
import ImgWithFallback, { w1280ImagesURL } from './ImgWithFallback';
import { ISliderData } from '../features/movies/types';

const MediaBanner = ({ mediaType, id }: any) => {
  const { data: backdrops, isLoading: imageLoading } = useGetBackdropQuery({
    mediaType,
    id,
  });
  const { data: videos, isLoading: videoLoading } = useGetVideosQuery({
    mediaType,
    id,
  });
  const trailer = videos?.find((el) => el.type === 'Trailer');
  const [mediaData, setMediaData] = useState<ISliderData>();

  useEffect(() => {
    if (backdrops && videos) {
      setMediaData({ images: backdrops, videos: videos });
    }
  }, [backdrops, videos]);

  return (
    <Swiper
      style={{
        height: '100%',
        width: '100%',
      }}
      centeredSlides={true}
      lazy={true}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      modules={[Navigation, Keyboard, Lazy]}
    >
      <SwiperSlide>
        <YoutubeEmbed embedId={trailer?.key} />
      </SwiperSlide>
      {!videoLoading &&
        !imageLoading &&
        mediaData?.images.map((el, index) => (
          <SwiperSlide key={index}>
            {el.file_path != null && (
              <ImgWithFallback
                src={w1280ImagesURL + el.file_path}
                alt={'backdrop'}
              />
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MediaBanner;
