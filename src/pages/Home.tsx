import MovieCard from "../components/MovieCard";
import { useState, useEffect } from 'react'
import api from "../services/api";

export default function Home() {

  const [movieList, setMovieList] = useState<Movie.IMovie[]>([])
  const [movieGenre, setMovieGenre] = useState<Movie.IGenre[]>([])


  async function getMovies() {
    try {
      const { data } = await api.get('/movie/now_playing?language=pt-BR&page=1')
      setMovieList(data.results)
    } catch (e) {
      console.log(e);
    }
  }
  async function getGenres() {
    try {
      const { data } = await api.get('/genre/movie/list?language=pt-BR')
      setMovieGenre(data.genres)
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getMovies()
    getGenres()
  }, [])


  return (
    <>
      <div className='bg-rose-500 p-2'>
        <h3 className='font-extrabold text-white'>TMDB</h3>
      </div>
      <header className="bg-red-900 text-white text-center p-12">
        <h1 className="text-4xl mb-8 font-bold">Milhares de filmes, séries e pessoas <br /> para descobrir. Explore já.</h1>
        <form>
          <input className="p-2 w-7/12" type="search" placeholder="Busque o filme desejado" />
          {/* <button className="bg-white text-gray-400">Buscar</button> */}
        </form>
        <section className="mt-8">
          <h5 className="uppercase mb-4">Filtrar por:</h5>
          <div className="flex gap-4 flex-wrap justify-center">
            {movieGenre?.map(category => (
              <button key={category.name} className="bg-white rounded-sm px-4 p-1 text-black hover:bg-gray-200">{category.name}</button>
            ))}
          </div>
        </section>
      </header>
      <main className="flex flex-wrap gap-4 p-8 justify-center">
        {movieList.map(movieInfo => (
          <MovieCard key={movieInfo.id} movie={movieInfo} />
        ))}
      </main>
    </>
  )
}