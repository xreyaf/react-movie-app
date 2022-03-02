import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const CardStyled = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${theme.colors.grey900_90};
  width: 100%;
  min-height: 100%;
`;
export const CardImageWrapper = styled.div`
  display: inline-block;
  border-radius: 1rem;
  width: 100%;
  height: 88%;
  overflow: hidden;
`;

export const ImageStyled = styled(motion.img)`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
  vertical-align: middle;
`;

export const CardInfo = styled.div`
  padding: .5rem;
  margin-bottom: .5rem;
  overflow: hidden;

  a {
    color: ${theme.colors.grey50};
    font-weight: 600;

    &:hover {
      color: ${theme.colors.white100};
      transition: color .3s;
    }
  }
`;