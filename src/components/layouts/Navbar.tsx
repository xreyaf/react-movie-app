import React from "react";
import { Container } from "../styles/Container.styled";
import { Header, Logo, Nav, StyledLinkMenu } from "../styles/Header.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  // @ts-ignore

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
              <StyledLinkMenu href="/movies">
                <Unicons.UilFilm size="1.2rem" />
                Movies
              </StyledLinkMenu>
            </li>
            <li>
              <StyledLinkMenu href="/series">
                <Unicons.UilTvRetro size="1.2rem" />
                TV Series
              </StyledLinkMenu>
            </li>
            <li>
              <StyledLinkMenu href="/chart">
                <Unicons.UilChart size="1.2rem" />
                Chart
              </StyledLinkMenu>
            </li>
          </ul>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
