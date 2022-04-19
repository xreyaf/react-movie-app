import React from 'react';
import Card from '../components/Card';
import { useGetPopularQuery } from '../features/movies/TMDBApi';
import Spinner from '../components/Spinner';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Heading from '../components/Heading';

function Movies() {
  const type = 'movie';
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <Heading>Произошла ошибка...</Heading>}
      {data && (
        <>
          <Heading>Популярные Фильмы</Heading>
          <br />
          <Grid>
            {data &&
              data.length &&
              data.map((movie, index) => (
                <Card key={index} type={type} item={movie} />
              ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Movies;
