import { Link } from "react-router-dom";

interface CardProps {
  movie: Movie.IMovie
}

export default function MovieCard({ movie }: CardProps) {

  const movieUrl = import.meta.env.VITE_IMG

  return (
    <Link to={`/movie/${movie.id}`}>
      <img className="mb-2" width={180} height={180} src={movieUrl + movie.poster_path} alt={movie.title} />
      <h3 className="font-bold">{movie.title}</h3>
      <span className="text-gray-500">data</span>
    </Link>
  );
}