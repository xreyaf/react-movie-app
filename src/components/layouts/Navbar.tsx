import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import { Logo } from './Header';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';

export const NavbarStyled = {
  Wrapper: styled.nav`
    padding: 0.7rem 5rem;
    margin: 0 auto;
    position: fixed;
    width: 100vw;
    height: 5rem;
    top: 0;
    left: 0;
    z-index: 100;
    background: ${(props) => props.theme.colors.grey900_80};
    backdrop-filter: blur(24px);
  `,
  Items: styled.ul`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
  `,
  NavItems: styled.ul`
    max-width: 1440px;
    margin: 0 0 0 auto;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `,
  Link: styled(motion.a)`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 1rem 1rem;
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.grey400};

    &:hover {
      color: ${(props) => props.theme.colors.primary400};
    }
  `,
};

const Navbar = () => {
  return (
    <NavbarStyled.Wrapper>
      <NavbarStyled.Items>
        <NavbarStyled.Item>
          <Link to="/">
            <Logo
              src={logo}
              alt="Logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, animation: 'ease-out' }}
            />
          </Link>
        </NavbarStyled.Item>
        <NavbarStyled.NavItems>
          <NavbarStyled.Item>
            <Link to="/movies">
              <NavbarStyled.Link whileHover={{ y: -3 }}>
                <Unicons.UilFilm size="1.2rem" />
                Фильмы
              </NavbarStyled.Link>
            </Link>
          </NavbarStyled.Item>
          <NavbarStyled.Item>
            <Link to="/series">
              <NavbarStyled.Link whileHover={{ y: -3 }}>
                <Unicons.UilTvRetro size="1.2rem" />
                Сериалы
              </NavbarStyled.Link>
            </Link>
          </NavbarStyled.Item>
          <NavbarStyled.Item>
            <Link to="/chart">
              <NavbarStyled.Link whileHover={{ y: -3 }}>
                <Unicons.UilChart size="1.2rem" />
                Чарты
              </NavbarStyled.Link>
            </Link>
          </NavbarStyled.Item>
        </NavbarStyled.NavItems>
      </NavbarStyled.Items>
    </NavbarStyled.Wrapper>
  );
};

export default Navbar;
