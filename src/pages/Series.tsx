import React from 'react';
import { useGetPopularQuery } from '../features/movies/TMDBApi';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import Grid from '../components/Grid';
import Container from '../components/Container';

function Series() {
  const type = 'tv';
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <h1>Some error occurred...</h1>}
      {data && (
        <>
          <h1>Popular TV Series</h1>
          <br />
          <Grid>
            {data &&
              data.length &&
              data.map((show) => (
                <Card key={show.id} type={type} item={show} />
              ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Series;
