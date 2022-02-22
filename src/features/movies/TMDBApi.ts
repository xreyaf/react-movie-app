import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMedia, IResponse } from "./types";

const API_KEY = "b50461522e6b25f122838ff594a78e50";


const TMDBApi = createApi({
  reducerPath: "api/movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3"
  }),
  endpoints: builder => ({
    getTrending: builder.query<IMedia[], string | void>({
      query: (media_type = "all", time = "week") => ({
        url: `/trending/${media_type}/${time}`,
        params: {
          api_key: API_KEY,
          language: "en_US"
        }
      }),
      transformResponse: (response: IResponse) => response.results
    }),
    getPopular: builder.query<IMedia[], string | void>({
      query: (media_type) => ({
        url: `/${media_type}/popular`,
        params: {
          api_key: API_KEY,
          language: "en_US"
        }
      }),
      transformResponse: (response: IResponse) => response.results
    }),
    searchMedia: builder.query<IMedia[], string | void>({
      query: (searchTitle) => ({
        url: `/search/multi`,
        params: {
          api_key: API_KEY,
          language: "en_US",
          query:  searchTitle ,
        }
      }),
      transformResponse: (response: IResponse) => response.results
    }),
  })
});

export const { useGetTrendingQuery, useGetPopularQuery, useSearchMediaQuery } = TMDBApi;
export default TMDBApi;