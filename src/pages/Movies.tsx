import React from "react";
import { Container } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import Card from "../components/Card";
import { useGetTrendingMoviesQuery } from "../features/movies/TMDBApi";

const Movies = () => {
  const { data } = useGetTrendingMoviesQuery();
  return (
    <Container>
      <h1>Movies page</h1>
      <br />
      <GridStyled>
        {data && <Card movies={data} />}
      </GridStyled>

    </Container>
  );
};

export default Movies;
