import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${theme.colors.grey900_90};
  backdrop-filter: blur(2px);
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

export const Logo = styled.img`
  max-width: 3rem;
`;

export const StyledLinkMenu = styled.a`
  display: inline-flex;
  gap: 0.5rem;
  padding: 1rem 1rem;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${theme.colors.grey400};
  &:hover {
    color: ${theme.colors.primary400};
    cursor: pointer;
    transition-duration: 0.5s;
  }
`;
