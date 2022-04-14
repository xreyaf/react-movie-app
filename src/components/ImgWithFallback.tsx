import React, { useState } from 'react';
import styled from '@emotion/styled';
import placeholder from '../assets/img/placeholder.png';
import placeholderBack from '../assets/img/placeholderBack.png';
export const w500ImagesURL = 'https://image.tmdb.org/t/p/w500';
export const w1280ImagesURL = 'https://image.tmdb.org/t/p/w1280';

const ImageStyled = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const ImgWithFallback = ({
  src,
  alt,
}: {
  src: string | undefined;
  alt: string | undefined;
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <picture>
      <source srcSet={imageError ? placeholder : src} type="image/jpeg" />
      <source srcSet={placeholder} type="image/png" />
      <source srcSet={placeholderBack} type="image/png" />
      <ImageStyled alt={alt} onError={() => setImageError(true)} />
    </picture>
  );
};

export default ImgWithFallback;
