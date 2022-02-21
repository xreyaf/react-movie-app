import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const RatingStyled = styled.div`
  color: ${theme.colors.warning400};
  background-color: ${theme.colors.black75};
  border-radius: .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .1rem;
  z-index: 2;
  top: .6rem;
  left: .6rem;
  position: absolute;
  padding: .25rem 0.5rem;
  p{
    color: ${theme.colors.warning400};
  }
`