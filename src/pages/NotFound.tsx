import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerStyled,
  NotFoundContainerStyled,
} from '../components/styles/Container.styled';
import { ButtonStyled } from '../components/styles/Button.styled';
import nf from '../assets/svg/404.svg';
import theme from '../styles/theme';

function NotFound() {
  return (
    <ContainerStyled>
      <NotFoundContainerStyled>
        <img
          style={{
            width: '70%',
            marginBottom: '2rem',
            height: 'auto',
          }}
          src={nf}
          alt="Not found"
        />
        <h2>Lost your way?</h2>
        <p>
          Oops! This is awkward. You are looking for something that doesn&apos;t
          actually exist.
        </p>
        <Link to="/">
          <ButtonStyled
            whileHover={{
              backgroundColor: theme.colors.primary500,
              cursor: 'pointer',
            }}
          >
            Go Home
          </ButtonStyled>
        </Link>
      </NotFoundContainerStyled>
    </ContainerStyled>
  );
}

export default NotFound;
