import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovies, ISeries, MovieResponse, SeriesResponse } from "./types";

const API_KEY = "b50461522e6b25f122838ff594a78e50";


const TMDBApi = createApi({
  reducerPath: "api/movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3"
  }),
  endpoints: builder => ({
    getTrendingMovies: builder.query<IMovies[], string | void>({
      query: (time = "week") => ({
        url: `/trending/movie/${time}`,
        params: {
          api_key: API_KEY
        }
      }),
      transformResponse: (response: MovieResponse) => response.results
    }),
    getTopRatedSeries: builder.query<ISeries[], void>({
      query: () => ({
        url: "/tv/top_rated",
        params: {
          api_key: API_KEY
        }
      }),
      transformResponse: (response: SeriesResponse) => response.results
    })
  })
});

export const { useGetTrendingMoviesQuery, useGetTopRatedSeriesQuery } = TMDBApi;
export default TMDBApi;