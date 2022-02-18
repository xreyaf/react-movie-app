import React from "react";
import { Container } from "../components/styles/Container.styled";
import { Button } from "../components/styles/Button.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import { GridStyled } from "../components/styles/Grid.styled";
import Card from "../components/Card";
import { useGetMoviesQuery } from "../features/movies/movieApi";


const Main = () => {
const {  data } = useGetMoviesQuery()
  console.log(data);
  return (
    <main>
      <Container>
        <h1>Main</h1>
        <Button>
          {" "}
          Search
          <Unicons.UilSearch size="1.2rem" />
        </Button>
        <br/>
        <GridStyled>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>


        </GridStyled>
      </Container>
    </main>
  );
};

export default Main;
