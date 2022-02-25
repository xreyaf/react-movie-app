import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import { useGetPopularQuery } from "../features/movies/TMDBApi";
import Card from "../components/Card";

const Series = () => {
  const type = "tv";
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <ContainerStyled>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Some error occurred...</h1>}
      {data && <>
        <h1>TV Series</h1>
        <br />
        <GridStyled>
          {data && data.length &&
            data.map(show => <Card key={show.id} type={type} item={show} />)
          }
        </GridStyled>
      </>
      }
    </ContainerStyled>
  );
};

export default Series;
