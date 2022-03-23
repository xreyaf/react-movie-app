import React, { ChangeEvent, useCallback, useState } from 'react';
import Card from '../components/Card';
import {
  useGetTrendingQuery,
  useSearchMediaQuery,
} from '../features/movies/TMDBApi';

import debounce from 'lodash/debounce';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import Spinner from '../components/Spinner';
import Search from '../components/Search';
import Grid from '../components/Grid';
import Container from '../components/Container';

const Home = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const mediaType = 'all';
  const time = 'week';

  const {
    data: trending,
    isLoading: isLoadingTrending,
    error: errorTrending,
  } = useGetTrendingQuery({
    mediaType,
    time,
  });
  const {
    data: search,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useSearchMediaQuery(searchTitle);

  const debouncedSearch = useCallback(
    debounce((q) => setSearchTitle(q), 600),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  let data;
  searchTitle ? (data = search) : (data = trending);

  return (
    <Container>
      <h1>Trending now</h1>
      <Search onChange={onChangeInput} />
      {isLoadingTrending && isLoadingSearch && <Spinner />}
      {errorTrending && errorSearch && <h1>Some error occurred...</h1>}
      {data && data.length != 0 ? (
        <>
          <Grid>
            {data.map((media) => (
              <Card key={media.id} type={media.media_type} item={media} />
            ))}
          </Grid>
        </>
      ) : (
        <h3>There are no results :(</h3>
      )}
    </Container>
  );
};

export default Home;
