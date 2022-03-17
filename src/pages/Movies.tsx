import React from 'react';
import { ContainerStyled } from '../components/styles/Container.styled';
import { GridStyled } from '../components/styles/Grid.styled';
import Card from '../components/Card';
import { useGetPopularQuery } from '../features/movies/TMDBApi';
import Spinner from '../components/Spinner';

function Movies() {
  const type = 'movie';
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <ContainerStyled>
      {isLoading && <Spinner />}
      {error && <h1>Some error occurred...</h1>}
      {data && (
        <>
          <h1>Popular movies</h1>
          <br />
          <GridStyled>
            {data &&
              data.length &&
              data.map((movie) => <Card type={type} item={movie} />)}
          </GridStyled>
        </>
      )}
    </ContainerStyled>
  );
}

export default Movies;
