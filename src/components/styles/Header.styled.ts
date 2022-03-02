import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const HeaderStyled = styled.header`
  position: fixed;
width: 100%;
height: 10%;
  top: 0;
  left: 0;


  z-index: 100;
  background: ${theme.colors.grey900_80};
  backdrop-filter: blur(24px);

  

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }
`;

export const Logo = styled(motion.img)`
  max-width: 3rem;
`;

export const StyledLinkMenu = styled(motion.a)`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem 1rem;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${theme.colors.grey400};

  &:hover {
    color: ${theme.colors.primary400};
  }
`;
