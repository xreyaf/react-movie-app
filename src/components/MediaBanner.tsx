import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useGetBackdropQuery, useGetVideosQuery } from "../features/movies/TMDBApi";
import { ImageStyled } from "./styles/Card.styled";
import React, { useEffect, useState } from "react";
import { w1280ImagesURL } from "../pages/MediaDetails";
import { Keyboard, Lazy, Navigation } from "swiper";
import { Backdrop, Result } from "../features/movies/types";
import YoutubeEmbed from "./YoutubeEmbed";

interface ISliderData {
  images: Backdrop[];
  videos: Result[];
}

const MediaBanner = ({ mediaType, id }: any) => {

  const { data: backdrops, isLoading: imageLoading } = useGetBackdropQuery({ mediaType, id });
  const { data: videos, isLoading: videoLoading } = useGetVideosQuery({ mediaType, id });
  const trailer = videos?.find(el => el.type === "Trailer");
  const [mediaData, setMediaData] = useState<ISliderData>();



  useEffect(() => {
    if (backdrops && videos) {
      setMediaData({ images: backdrops, videos: videos });
    }
  }, [backdrops, videos]);

  return (
    <Swiper style={{
      height: "100%",
      width: "100%"
    }}
            centeredSlides={true}
            lazy={true}
            keyboard={{
              enabled: true
            }}
            navigation={true}
            modules={[Navigation, Keyboard, Lazy]}>
      <SwiperSlide>
        <YoutubeEmbed embedId={trailer?.key} />
      </SwiperSlide>
      {!videoLoading && !imageLoading && mediaData?.images.map((el, index) => (
        <SwiperSlide key={index}>
          <ImageStyled src={w1280ImagesURL + el.file_path} />
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default MediaBanner;