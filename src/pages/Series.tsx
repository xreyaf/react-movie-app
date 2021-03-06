import React from 'react';
import { useGetPopularQuery } from '../features/movies/TMDBApi';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { Space } from '../components/layouts/Space';

function Series() {
  const type = 'tv';
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <Container>
      {isLoading && (
        <>
          <Spinner />
          <Space />
        </>
      )}
      {error && (
        <>
          <Heading>Произошла ошибка...</Heading>
          <Space />
        </>
      )}
      {data && (
        <>
          <Heading>Популярные Сериалы</Heading>
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
