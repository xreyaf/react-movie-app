import React from "react";
import { Container } from "../components/styles/Container.styled";
import { Button } from "../components/styles/Button.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import Card from "../components/Card";
import { useGetTrendingMoviesQuery } from "../features/movies/TMDBApi";
import { theme } from "../styles/theme";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";

const Main = () => {
  const { data } = useGetTrendingMoviesQuery();

  return (
    <main>
      <Container>
        <h1>Main</h1>
        <Button whileHover={{ y: -3, backgroundColor: theme.colors.primary500, cursor: "pointer" }}>
          Search
          <Unicons.UilSearch size="1.2rem" />
        </Button>
        <br />
        <GridStyled>
          {data && <Card props={data} />}
        </GridStyled>
      </Container>
    </main>
  );
};

export default Main;
