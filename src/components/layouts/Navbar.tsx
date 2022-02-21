import React from "react";
import { Container } from "../styles/Container.styled";
import { Header, Logo, Nav, StyledLinkMenu } from "../styles/Header.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, animation: "ease-out" }}
            >
              <Logo src="../logo.svg" alt="Logo" />
            </motion.div>
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
      </Container>
    </Header>
  );
};

export default Navbar;
