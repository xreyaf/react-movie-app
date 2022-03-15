import React from "react";
import { ContainerStyled, NotFoundContainerStyled } from "../components/styles/Container.styled";
import { ImageStyled } from "../components/styles/Card.styled";
import { ButtonStyled } from "../components/styles/Button.styled";
import nf from "../assets/svg/404.svg";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <ContainerStyled>
      <NotFoundContainerStyled>
        <ImageStyled style={{
          width: "70%",
          marginBottom: "2rem",
          height: "auto"
        }} src={nf} />
        <h2>Lost your way?</h2>
        <p> Oops! This is awkward. You are looking for something that doesn't actually
          exist.</p>
        <Link to="/">
          <ButtonStyled whileHover={{
            backgroundColor: theme.colors.primary500,
            cursor: "pointer"
          }}>Go Home</ButtonStyled>
        </Link>
      </NotFoundContainerStyled>
    </ContainerStyled>
  );
};

export default NotFound;