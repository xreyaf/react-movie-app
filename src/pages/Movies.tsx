import React from 'react';
import Card from '../components/Card';
import { useGetPopularQuery } from '../features/movies/TMDBApi';
import Spinner from '../components/Spinner';
import Grid from '../components/Grid';
import Container from '../components/Container';

function Movies() {
  const type = 'movie';
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <h1>Some error occurred...</h1>}
      {data && (
        <>
          <h1>Popular movies</h1>
          <br />
          <Grid>
            {data &&
              data.length &&
              data.map((movie) => <Card type={type} item={movie} />)}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Movies;
