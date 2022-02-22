import React from "react";
import { ContainerStyled } from "../styles/Container.styled";
import { Logo, Nav, StyledLinkMenu, HeaderStyled } from "../styles/Header.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Nav>
          <Link to="/">
            <Logo src="../logo.svg" alt="Logo" whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8, animation: "ease-out" }} />
          </Link>

          <ul>
            <li>
              <Link to="/movies">
                <StyledLinkMenu>
                  <Unicons.UilFilm size="1.2rem" />
                  Movies
                </StyledLinkMenu>
              </Link>
            </li>
            <li>
              <Link to="/series">
                <StyledLinkMenu>
                  <Unicons.UilTvRetro size="1.2rem" />
                  TV Series
                </StyledLinkMenu></Link>
            </li>
            <li>
              <Link to="/chart">
                <StyledLinkMenu>
                  <Unicons.UilChart size="1.2rem" />
                  Chart
                </StyledLinkMenu></Link>
            </li>
          </ul>
        </Nav>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Navbar;
