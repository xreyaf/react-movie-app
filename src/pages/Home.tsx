import React, { ChangeEvent, useCallback, useState } from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import Card from '../components/Card';
import {
  useGetTrendingQuery,
  useSearchMediaQuery,
} from '../features/movies/TMDBApi';
import debounce from 'lodash/debounce';

import Spinner from '../components/Spinner';
import Input from '../components/Input';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { Space } from '../components/layouts/Space';

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
      <Heading>Сейчас в тренде</Heading>
      <Input
        name={'search'}
        onChange={onChangeInput}
        placeholder="напр. Брат"
        label="Найти фильм или сериал"
        type="text"
        icon={<Unicons.UilSearch size={24} />}
      />
      {isLoadingTrending && isLoadingSearch && (
        <>
          <Spinner />
          <Space />
        </>
      )}
      {errorTrending && errorSearch && (
        <>
          <Heading>Произошла ошибка...</Heading>
          <Space />
        </>
      )}
      {data && data.length != 0 ? (
        <>
          <Grid>
            {data.map((media) => (
              <Card key={media.id} type={media.media_type} item={media} />
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Heading>Не нашлось результатов :(</Heading>
          <Space />
        </>
      )}
    </Container>
  );
};

export default Home;
