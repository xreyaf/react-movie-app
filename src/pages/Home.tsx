import React, { ChangeEvent, useCallback, useState } from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { GridStyled } from "../components/styles/Grid.styled";
import Card from "../components/Card";
import { useGetTrendingQuery, useSearchMediaQuery } from "../features/movies/TMDBApi";
import { IconWrapper, InputContent, InputStyled } from "../components/styles/Input.Styled";
import debounce from "lodash/debounce";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";


const Home = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const mediaType = "all";
  const time = "week";

  const { data: trending, isLoading: isLoadingTrending, error: errorTrending } = useGetTrendingQuery({
    mediaType,
    time
  });
  const { data: search, isLoading: isLoadingSearch, error: errorSearch } = useSearchMediaQuery(searchTitle);

  const debouncedSearch = useCallback(
    debounce((q) => setSearchTitle(q), 600), []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  let data;
  searchTitle ? data = search : data = trending;

  return (
    <ContainerStyled>
      <h1>Trending now</h1>
      <InputStyled>
        <IconWrapper><Unicons.UilSearch size={24} /></IconWrapper>
        <InputContent name="search" id="search" type="text" placeholder="eg. Spider-Man" onChange={onChangeInput} />
        <label htmlFor="search">Search movies or TV series</label>
      </InputStyled>
      {isLoadingTrending && isLoadingSearch && <h1>Loading...</h1>}
      {errorTrending && errorSearch && <h1>Some error occurred...</h1>}
      {data && data.length != 0 ? (
        <>
          <GridStyled >

              {
                data.map(media => <Card key={media.id} type={media.media_type} item={media} />)
              }


          </GridStyled></>) : (<h1>Not found</h1>)}
    </ContainerStyled>
  );
};

export default Home;
