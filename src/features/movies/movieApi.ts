import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "b50461522e6b25f122838ff594a78e50";

interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


const movieApi = createApi({
  reducerPath: "api/movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",

  }),
  endpoints: builder => ({
    getMovies: builder.query<IMovies[], string | void>({
      query(time = "week") {
        return `/trending/movie/${time}?api_key=${API_KEY}`;
      }
    })
  })
});
export const { useGetMoviesQuery } = movieApi;
export default movieApi;