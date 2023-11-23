
interface CardProps {
  movie: Movie.IMovie
}

export default function MovieCard({ movie }: CardProps) {
  return (
    <div>
      <img className="mb-2" src="https://placehold.co/180x250" alt="" />
      <h3 className="font-bold">{movie.title}</h3>
      <span className="text-gray-500">data</span>
    </div>
  );
}