import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDetails, IMedia, IResponse } from "./types";

const API_KEY = "b50461522e6b25f122838ff594a78e50";


const TMDBApi = createApi({
  reducerPath: "api/movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3"
  }),
  endpoints: builder => ({
    getTrending: builder.query<IMedia[], unknown>({
      query: ({ media_type, time }) => ({
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
          query: searchTitle
        }
      }),
      transformResponse: (response: IResponse) => response.results
    }),
    getDetails: builder.query<IDetails, unknown>({
      query: ({ mediaType, id }) => ({
        url: `/${mediaType}/${id}`,
        params: {
          api_key: API_KEY,
          language: "en_US"
        }
      })
    })
  })
});

export const { useGetTrendingQuery, useGetPopularQuery, useSearchMediaQuery, useGetDetailsQuery } = TMDBApi;
export default TMDBApi;