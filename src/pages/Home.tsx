import React, { ChangeEvent, useState } from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import Card from "../components/Card";
import { useGetTrendingQuery, useSearchMediaQuery } from "../features/movies/TMDBApi";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";
import { IconWrapper, InputContent, InputStyled } from "../components/styles/Input.Styled";



const Home = () => {
  const [searchTitle, setSearchTitle] = useState("Thor");
  // const { data } = useGetTrendingQuery('all');

    const { data } = useSearchMediaQuery(searchTitle);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  return (
    <ContainerStyled>
      <h1>Trending now</h1>
      <InputStyled>
        <IconWrapper><Unicons.UilSearch size={24} /></IconWrapper>
        <InputContent name="search" id="search" type="text" placeholder="eg. Spider-Man" onChange={onChangeInput} />
        <label htmlFor="search">Search movies or TV series</label>
      </InputStyled>
      <GridStyled>
        {data && <Card type="movie" props={data} />}
      </GridStyled>
    </ContainerStyled>
  );
};

export default Home;
