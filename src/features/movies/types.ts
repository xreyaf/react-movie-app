export interface MovieResponse {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name: string;
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

export interface SeriesResponse {
  page: number;
  results: ISeries[];
  total_pages: number;
  total_results: number;
}

export interface ISeries {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  title: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ICard{
  id: number;
  name: string;
  title: string;
  poster_path: string;
  vote_average: number;

}