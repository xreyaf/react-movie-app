import { Theme } from '@emotion/react';
import { JSX } from '@emotion/react/jsx-runtime';
import styled, { Interpolation } from '@emotion/styled';
import { ElementType, ClassAttributes, HTMLAttributes, ReactNode } from 'react';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem 5rem;
  margin: 0 auto 2rem auto;
  height: 100%;
  @media ${({ theme }) => theme.media.largeDesktop} {
    padding: 1rem 2rem;
  }
  @media ${({ theme }) => theme.media.desktop} {
    padding: 1rem 1.5rem;
  }
  @media ${({ theme }) => theme.media.tablet} {
    padding: 1rem 1.2rem;
  }
  @media ${({ theme }) => theme.media.phone} {
    padding: 1rem 1rem;
  }
`;

const Container = (
  props: JSX.IntrinsicAttributes & { css?: Interpolation<Theme> } & {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  } & ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
) => {
  return <StyledContainer {...props} />;
};

export default Container;
