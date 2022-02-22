import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import {  useGetPopularQuery } from "../features/movies/TMDBApi";
import Card from "../components/Card";

const Series = () => {
  const {data} = useGetPopularQuery("tv")

  return (
    <ContainerStyled>
      <h1>TV Series</h1>
      <br/>
      <GridStyled>
        {data && <Card type='tv' props={data} />}
      </GridStyled>
    </ContainerStyled>
  );
};

export default Series;
