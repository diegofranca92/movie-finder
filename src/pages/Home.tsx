import { useState, useEffect } from 'react'
import api from "../services/api";
import { Pagination } from "../components/Pagination";
import { NavBar } from "../components/NavBar";
import closeIcon from '../assets/close.svg'

export default function Home() {

  const [movieGenre, setMovieGenre] = useState<Movie.IGenre[]>([])
  const [filterSelected, setFilterSelected] = useState<boolean>(false)

  async function getGenres() {
    try {
      const { data } = await api.get('/genre/movie/list?language=pt-BR')
      setMovieGenre(data.genres)
    } catch (e) {
      console.log(e);
    }
  }

  function handleFilterGenre(item: string) {
    const selectedFiltered: string[] = []
    
    if (!selectedFiltered.includes(item)) {
      selectedFiltered.push(item)
      setFilterSelected(!filterSelected)
      let selectedItem = document.getElementById(item)
      selectedItem?.classList.toggle('bg-selected')
      selectedItem?.classList.toggle('text-white')
      selectedItem?.firstElementChild?.classList.toggle('hidden')
    }
    
  }

  useEffect(() => {
    getGenres()
  }, [])


  return (
    <>
      <NavBar />
      <header className="bg-primary text-white text-center p-12">
        <h1 className="text-4xl mb-8 font-bold">Milhares de filmes, séries e pessoas <br /> para descobrir. Explore já.</h1>
        {/* <form>
          <input className="p-2 w-7/12" type="search" placeholder="Busque o filme desejado" />
          <button className="bg-white text-gray-400">Buscar</button>
        </form> */}
        <section className="mt-8">
          <h5 className="uppercase mb-4">Filtrar por:</h5>
          <div className="flex gap-4 flex-wrap justify-center">
            {movieGenre?.map(category => (
              <button onClick={() => handleFilterGenre(category.id.toString())} id={category.id.toString()} key={category.id} 
              className={`rounded-sm px-4 p-1 bg-white text-black flex items-center`}
              >
                {category.name} <img src={closeIcon} className='w-[16px] h-[16px] ms-2 hidden' />
              </button>
            ))}
          </div>
        </section>
      </header>
      <Pagination itemsPerPage={10} />
    </>
  )
}