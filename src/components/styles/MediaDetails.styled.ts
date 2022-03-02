import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const MediaDetailsBanner = styled.div`
  width: 100%;
  height: 480px;
  border-radius: 5rem;
  overflow: hidden;
  z-index: 1;
`;
export const PosterStyled = styled.div`
  width: 50%;
  height: 720px;
  border-radius: 5rem;
  overflow: hidden;
  z-index: 1;
`;

export const MediaDetailsTitle = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px;
  border-radius: 2rem;
  width: 100%;
  max-width: 560px;
  margin-top: -4.5rem;
  margin-left: 5rem;
  background: ${theme.colors.grey900_80};
  backdrop-filter: blur(24px);
`;

export const MediaDetailsWrapper = styled.div`
  margin: 5rem;
  display: flex;

  @media screen and (max-width: 1199.98px) {
    margin: 5rem 2rem;
  }
  @media screen and (max-width: 816.98px) {
    margin: 5rem 0;
  }
  @media screen and (max-width: 575.98px) {
    margin: 5rem 0;
  }

`;
export const MediaInfoContainer = styled.div`
  width: 50%;
  padding-left: 5rem;

`;

export const MediaFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MediaInfoBlock = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  span {
    color: ${theme.colors.grey50};
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;

    &:not(:first-of-type) {
      &::before {
        content: ", ";
      }
    }
  }
`;

export const Logo = styled.div`
  background-color: ${theme.colors.white20};
  border-radius: 1rem;
  padding: .6rem;
  width: 60%;
`;

export const Label = styled.p`
  color: ${theme.colors.grey400};
`;
export const LargeText = styled.p`
  color: ${theme.colors.grey50};
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 400;
`;

export const MediaInfoRating = styled.div`
  padding: 0.6rem;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  border-radius: 0.6rem;
  gap: 0.6rem;
  background-color: ${theme.colors.black65};
  color: ${theme.colors.warning500};

  p {
    color: ${theme.colors.warning500};
  }

`;
