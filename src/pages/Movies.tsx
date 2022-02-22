import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import Card from "../components/Card";
import { useGetTrendingQuery } from "../features/movies/TMDBApi";

const Movies = () => {
  const { data } = useGetTrendingQuery('movie');
  return (
    <ContainerStyled>
      <h1>Movies page</h1>
      <br />
      <GridStyled>
        {data && <Card type='movie' props={data} />}
      </GridStyled>

    </ContainerStyled>
  );
};

export default Movies;
