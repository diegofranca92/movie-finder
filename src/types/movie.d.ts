declare namespace Movie {
  interface IMovie {
    id: number;
    title: string;
    poster_path?: string;
    genres?: string[];
    overview?: string;
    vote_average?: number;
  }
}