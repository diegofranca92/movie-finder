import MovieCard from "../components/MovieCard";
import { useState, useEffect } from 'react'

export default function Home() {

  const [movieList, setMovieList] = useState<Movie.IMovie[]>([])

  const categoryFilters = [
    {
      name: 'Ação'
    },
    {
      name: 'Drama'
    }
  ]

  useEffect(() => {
    setMovieList([
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
    ])
  }, [])


  return (
    <>
      <header className="bg-red-900 text-white text-center p-12">
        <h1 className="text-3xl mb-8">Milhares de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <form>
          <input className="p-2 w-7/12" type="search" placeholder="Busque o filme desejado" />
          {/* <button className="bg-white text-gray-400">Buscar</button> */}
        </form>
        <section className="mt-8">
          <h5 className="uppercase mb-4">Filtrar por:</h5>
          <div className="flex gap-4 justify-center">
            {categoryFilters.map(category => (
              <button className="bg-white rounded-sm px-4 p-1 text-black hover:bg-gray-200">{category.name}</button>
            ))}
          </div>
        </section>
      </header>
      <main className="flex flex-wrap gap-4 p-8">
        {movieList.map(movieInfo => (
          <MovieCard key={movieInfo.id} movie={movieInfo} />
        ))}
      </main>
    </>
  )
}