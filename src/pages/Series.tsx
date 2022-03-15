import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import { useGetPopularQuery } from "../features/movies/TMDBApi";
import Card from "../components/Card";
import { JellyfishSpinner } from "react-spinners-kit";

const Series = () => {
  const type = "tv";
  const { data, isLoading, error } = useGetPopularQuery(type);
  return (
    <ContainerStyled>
      {isLoading && <JellyfishSpinner />}
      {error && <h1>Some error occurred...</h1>}
      {data && <>
        <h1>Popular TV Series</h1>
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
