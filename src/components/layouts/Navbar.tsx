import React from "react";
import {
  Logo,
  Nav,
  StyledLinkMenu,
  HeaderStyled
} from "../styles/Header.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { ContainerStyled } from "../styles/Container.styled";
import logosvg from "../../assets/svg/logo.svg";

const Navbar: React.FC = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Nav>
          <Link to="/">
            <Logo
              src={logosvg}
              alt="Logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, animation: "ease-out" }}
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
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Navbar;
