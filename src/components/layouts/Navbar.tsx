import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { motion } from 'framer-motion';
import Container from '../Container';

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${theme.colors.grey900_80};
  backdrop-filter: blur(24px);
`;

const Nav = styled.nav`
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
  max-width: 2.5rem;
`;

const StyledLinkMenu = styled(motion.a)`
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

function Navbar() {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Link to="/">
            <Logo
              src={logo}
              alt="Logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, animation: 'ease-out' }}
            />
          </Link>

          <ul>
            <li>
              <Link to="/movies">
                <StyledLinkMenu whileHover={{ y: -3 }}>
                  <Unicons.UilFilm size="1.2rem" />
                  Movies
                </StyledLinkMenu>
              </Link>
            </li>
            <li>
              <Link to="/series">
                <StyledLinkMenu whileHover={{ y: -3 }}>
                  <Unicons.UilTvRetro size="1.2rem" />
                  TV Series
                </StyledLinkMenu>
              </Link>
            </li>
            <li>
              <Link to="/chart">
                <StyledLinkMenu whileHover={{ y: -3 }}>
                  <Unicons.UilChart size="1.2rem" />
                  Chart
                </StyledLinkMenu>
              </Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderStyled>
  );
}

export default Navbar;
