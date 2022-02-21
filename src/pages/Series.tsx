import React from "react";
import { Container } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import {  useGetTopRatedSeriesQuery } from "../features/movies/TMDBApi";
import Card from "../components/Card";

const Series = () => {
  const {data} = useGetTopRatedSeriesQuery()

  return (
    <Container>
      <h1>TV Series</h1>
      <br/>
      <GridStyled>
        {data && <Card props={data} />}
      </GridStyled>
    </Container>
  );
};

export default Series;
