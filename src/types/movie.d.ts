declare namespace Movie {
  interface IMovie {
    id: number;
    title: string;
    poster_path?: string;
    genres?: string[];
    overview?: string;
    release_date?: string;
    original_language?: string;
    vote_average?: number;
    adult?: boolean;
  }

  interface IGenre {
    id: number;
    name: string;
  }

  interface ICredit {
    id: number;
    name: string;
    character: string;
    profile_path?: string;
  }
}