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
  media_type: string;
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


export interface Genre {
  id: number;
  name: string;
}

export interface IDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeToAir;
  next_episode_to_air: EpisodeToAir;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  seasons: Season[];
  type: string;
}


export interface EpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path?: any;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}


