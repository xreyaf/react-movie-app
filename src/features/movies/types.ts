export interface IMedia {
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
  first_air_date: string;
  origin_country: string[];
  original_name: string;
}

export interface IResponse {
  page: number;
  results: IMedia[];
  total_pages: number;
  total_results: number;
}

export interface ICard {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  vote_average: number;
}