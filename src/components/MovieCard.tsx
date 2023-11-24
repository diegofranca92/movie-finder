import { Link } from "react-router-dom";

interface CardProps {
  movie: Movie.IMovie
}

export default function MovieCard({ movie }: CardProps) {

  const movieUrl = import.meta.env.VITE_IMG

  return (
    <Link to={`/movie/${movie.id}`} className="min-w-[180px] md:w-[180px]">
      <img className="mb-2 md:w-[180px] rounded-md" src={movieUrl + movie.poster_path} alt={movie.title} />
      <h3 className="font-bold">{movie.title}</h3>
      <span className="text-gray-500">{movie.release_date?.split('-').reverse().join('/')}</span>
    </Link>
  );
}