import MovieCard from "../components/MovieCard";

interface MovieDetailProps {
  movie: Movie.IMovie
}

export default function MovieDetail({ movie }: MovieDetailProps) {

  const movieList = [
    {
      id: 1,
      title: 'Movie Teste lista'
    },
    {
      id: 2,
      title: 'Movie Teste lista'
    },
    {
      id: 3,
      title: 'Movie Teste lista'
    },
    {
      id: 4,
      title: 'Movie Teste lista'
    },
    {
      id: 5,
      title: 'Movie Teste lista'
    },
    {
      id: 6,
      title: 'Movie Teste lista'
    },
    {
      id: 5,
      title: 'Movie Teste lista'
    },
    {
      id: 6,
      title: 'Movie Teste lista'
    },
    {
      id: 5,
      title: 'Movie Teste lista'
    },
    {
      id: 6,
      title: 'Movie Teste lista'
    },
  ]

  return (
    <div>
      <header className="bg-red-900 text-white p-12 flex gap-4">
        <img className="-mb-20 shadow-md rounded-md" src="https://placehold.co/250x350" alt="" />
        <div>
          <h1 className="text-3xl">movie.title</h1>
          <p>16 anos + 11/02/2016 (BR) + Ficcao, Comedia</p>
          <div className="flex my-4">
            <span className="border-green-400 border-4 rounded-full p-2">
              70 %
            </span>
            Avaliação dos usuários
          </div>

          <h4 className="font-bold">Sinopse</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur commodi, sed ad atque eligendi recusandae ut officia, id quaerat nulla cum architecto, quidem suscipit! Sequi officia deleniti eaque! Repellat.</p>
        </div>
      </header>
      <main className="m-12">
        <h3 className="text-xl font-bold mb-4">Elenco original</h3>
        <section className="flex w-7/12 gap-4 overflow-scroll overflow-y-hidden">
          {movieList.map(movieInfo => (
            <MovieCard key={movieInfo.id} movie={movieInfo} />
          ))}
        </section>
        <h3 className="text-xl font-bold mb-4 mt-12">Trailer</h3>
        <section>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gfMRgap9jWk?si=ZV9nQHwiquv9HQUO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
        <h3 className="text-xl font-bold mb-4 mt-12">Recomendações</h3>
        <section className="flex w-7/12 gap-4 overflow-scroll overflow-y-hidden">
          {movieList.map(movieInfo => (
            <MovieCard key={movieInfo.id} movie={movieInfo} />
          ))}
        </section>
      </main>
    </div>
  );
}