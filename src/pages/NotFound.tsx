import React from 'react';
import { Link } from 'react-router-dom';
import nf from '../assets/svg/404.svg';
import Button from '../components/Button';
import Container from '../components/Container';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const NotFoundWrapper = styled.div`
  min-height: calc(100vh - 184px);
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
        <h2>Lost your way?</h2>
        <p>
          Oops! This is awkward. You are looking for something that doesn&apos;t
          actually exist.
        </p>
        <Link to="/">
          <Button
            whileHover={{
              backgroundColor: theme.colors.primary500,
              cursor: 'pointer',
            }}
          >
            Go Home
          </Button>
        </Link>
      </NotFoundWrapper>
    </Container>
  );
};

export default NotFound;
