import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { IDetails, IMedia, IResponse } from "./types";

const API_KEY = "b50461522e6b25f122838ff594a78e50";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<{
    url: string
    method: AxiosRequestConfig["method"]
    params: AxiosRequestConfig["params"]
    data?: AxiosRequestConfig["data"]
  }, unknown, unknown, unknown> =>
    async ({ url, method, params, data }) => {
      try {
        const result = await axios({ url: baseUrl + url, method, params, data });
        return { data: result.data };
      } catch (axiosError) {
        let err = axiosError as AxiosError;
        return {
          error: { status: err.response?.status, data: err.response?.data }
        };
      }
    };

const TMDBApi = createApi({
  reducerPath: "api/movies",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.themoviedb.org/3"
  }),
  endpoints: builder => ({
    getTrending: builder.query<IMedia[], unknown>({
      query: ({ media_type, time }) => ({
        url: `/trending/${media_type}/${time}`,
        method: "get",
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
        method: "get",
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
        method: "get",
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
        method: "get",
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