import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import { Logo } from './Header';
import styled from '@emotion/styled';
import { NavbarStyled } from './Navbar';

const MobileNavbarStyled = {
  Wrapper: styled.nav`
    position: fixed;
    width: 100vw;
    bottom: 0;
    justify-content: center;

    z-index: 100;
    background: ${(props) => props.theme.colors.grey900_80};
    backdrop-filter: blur(24px);
  `,
  Items: styled(NavbarStyled.Items)`
    flex: 1;
    padding: 0 2rem;
    justify-content: space-around;
    align-items: center;
  `,
  Item: styled(NavbarStyled.Item)``,
  Link: styled(NavbarStyled.Link)`
    flex-direction: column;
    gap: 0;
  `,
};

const MobileNavbar = () => {
  return (
    <>
      <MobileNavbarStyled.Wrapper>
        <MobileNavbarStyled.Items>
          <MobileNavbarStyled.Item>
            <Link to="/movies">
              <MobileNavbarStyled.Link whileHover={{ y: -3 }}>
                <Unicons.UilFilm size="1.2rem" />
                Фильмы
              </MobileNavbarStyled.Link>
            </Link>
          </MobileNavbarStyled.Item>
          <MobileNavbarStyled.Item>
            <Link to="/">
              <Link to="/">
                <Logo
                  src={logo}
                  alt="Logo"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8, animation: 'ease-out' }}
                />
              </Link>
            </Link>
          </MobileNavbarStyled.Item>
          <MobileNavbarStyled.Item>
            <Link to="/series">
              <MobileNavbarStyled.Link whileHover={{ y: -3 }}>
                <Unicons.UilTvRetro size="1.2rem" />
                Сериалы
              </MobileNavbarStyled.Link>
            </Link>
          </MobileNavbarStyled.Item>
          {/*<MobileNavbarStyled.Item>*/}
          {/*  <Link to="/chart">*/}
          {/*    <MobileNavbarStyled.Link whileHover={{ y: -3 }}>*/}
          {/*      <Unicons.UilChart size="1.2rem" />*/}
          {/*      Чарты*/}
          {/*    </MobileNavbarStyled.Link>*/}
          {/*  </Link>*/}
          {/*</MobileNavbarStyled.Item>*/}
        </MobileNavbarStyled.Items>
      </MobileNavbarStyled.Wrapper>
    </>
  );
};

export default MobileNavbar;
