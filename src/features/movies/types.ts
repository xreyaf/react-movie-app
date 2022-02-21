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
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  genre_ids: number[];
  vote_count: number;
  original_language: string;
  original_title: string;
  popularity: number;
  media_type: string;
}