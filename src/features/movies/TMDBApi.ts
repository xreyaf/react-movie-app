import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import {
  Backdrop,
  IDetails,
  IImages,
  IMedia,
  IResponse,
  IVideos,
  Result,
} from './types';

const API_KEY = process.env.TMDB_KEY;
const LANG = process.env.LANG;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      params: AxiosRequestConfig['params'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown,
    unknown
  > =>
  async ({ url, method, params, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, params, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

const TMDBApi = createApi({
  reducerPath: 'api/movies',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getTrending: builder.query<IMedia[], unknown>({
      query: ({ media_type, time }) => ({
        url: `/trending/${media_type}/${time}`,
        method: 'GET',
        params: {
          api_key: API_KEY,
          language: LANG,
        },
      }),
      transformResponse: (response: IResponse) => response.results,
    }),
    getPopular: builder.query<IMedia[], string | void>({
      query: (media_type) => ({
        url: `/${media_type}/popular`,
        method: 'GET',
        params: {
          api_key: API_KEY,
          language: LANG,
        },
      }),
      transformResponse: (response: IResponse) => response.results,
    }),
    searchMedia: builder.query<IMedia[], string | void>({
      query: (searchTitle) => ({
        url: `/search/multi`,
        method: 'GET',
        params: {
          api_key: API_KEY,
          language: LANG,
          query: searchTitle,
        },
      }),
      transformResponse: (response: IResponse) =>
        response.results.filter((value) => value.media_type != 'person'),
    }),
    getDetails: builder.query<IDetails, unknown>({
      query: ({ mediaType, id }) => ({
        url: `/${mediaType}/${id}`,
        method: 'GET',
        params: {
          api_key: API_KEY,
          language: LANG,
        },
      }),
    }),
    getBackdrop: builder.query<Backdrop[], unknown>({
      query: ({ mediaType, id }) => ({
        url: `/${mediaType}/${id}/images`,
        method: 'GET',
        params: {
          api_key: API_KEY,
        },
      }),
      transformResponse: (response: IImages) => response.backdrops,
    }),
    getVideos: builder.query<Result[], unknown>({
      query: ({ mediaType, id }) => ({
        url: `/${mediaType}/${id}/videos`,
        method: 'GET',
        params: {
          api_key: API_KEY,
        },
      }),
      transformResponse: (response: IVideos) => response.results,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetPopularQuery,
  useSearchMediaQuery,
  useGetDetailsQuery,
  useGetBackdropQuery,
  useGetVideosQuery,
} = TMDBApi;
export default TMDBApi;
