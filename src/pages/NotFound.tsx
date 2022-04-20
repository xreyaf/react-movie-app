import React from 'react';
import { Link } from 'react-router-dom';
import nf from '../assets/svg/404.svg';
import Button from '../components/Button';
import Container from '../components/Container';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Heading from '../components/Heading';

const NotFoundWrapper = styled.div`
  height: calc(100vh - 184px);
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    height: 90%;
    margin: 5rem 0;
  }
  @media ${({ theme }) => theme.media.phone} {
    height: 90%;
    margin: 5rem 0;
  }
`;

const NotFound = () => {
  const theme = useTheme();
  return (
    <Container>
      <NotFoundWrapper>
        <img
          style={{
            width: '70%',
            marginBottom: '2rem',
            height: 'auto',
          }}
          src={nf}
          alt="Not found"
        />
        <Heading>Потерялся, странник?</Heading>
        <p>Ууупс! Вот так незадача... Вы ищете несуществующую страницу</p>
        <Link to="/">
          <Button
            whileHover={{
              backgroundColor: theme.colors.primary500,
              cursor: 'pointer',
            }}
          >
            Вернуться домой
          </Button>
        </Link>
      </NotFoundWrapper>
    </Container>
  );
};

export default NotFound;
