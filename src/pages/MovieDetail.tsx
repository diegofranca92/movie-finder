import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import api from "../services/api";
import CreditsCard from '../components/CreditsCard';



export default function MovieDetail() {

  const [movieDetail, setMovieDetail] = useState<Movie.IMovie>()
  const [ratedFilms, setRatedFilms] = useState<Movie.IMovie[]>()
  const [creditList, setCreditList] = useState<Movie.ICredit[]>()
  const params = useParams()
  const navigate = useNavigate()
  const movieUrl = import.meta.env.VITE_IMG

  async function getMovie() {
    try {
      const { data } = await api.get(`/movie/${params.id}?language=pt-BR`)
      console.log(data);
      setMovieDetail(data)
    } catch (e) {
      console.log(e);
    }
  }
  async function getRated() {
    try {
      const { data } = await api.get(`/movie/top_rated?language=pt-BR&page=1`)
      console.log(data.results);
      setRatedFilms(data.results)
    } catch (e) {
      console.log(e);
    }
  }
  async function getCredits() {
    try {
      const { data } = await api.get(`/movie/${params.id}/credits?language=pt-BR`)
      console.log(data.cast);
      setCreditList(data.cast)
    } catch (e) {
      console.log(e);
    }
  }

  // async function getGenres() {
  //   try {
  //     const { data } = await api.get('/genre/movie/list?language=pt-BR')
  //     console.log(data.genres);
  //     setMovieGenre(data.genres)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  useEffect(() => {
    getMovie()
    getRated()
    getCredits()
    // getGenres()
  }, [])

 return (
    <div>
      <header className="bg-red-900 text-white p-12 flex gap-4">
        <img
          className="-mb-20 shadow-md rounded-md"
          width={250}
          height={350}
          src={movieUrl + movieDetail?.poster_path}
          alt={movieDetail?.title} />
        <div>
          <div className='flex justify-between'>
            <h1 className="text-3xl">{movieDetail?.title}</h1>
            <button className='bg-transparent border-white border-2 px-2 hover:bg-white hover:text-black' onClick={() => navigate(-1)}>voltar</button>
          </div>
          <p>16 anos + {movieDetail?.release_date} ({movieDetail?.original_language}) +
            {/* {movieDetail?.genres?.map((gen:any) => gen.name.join(', '))} */}
          </p>
          <div className="flex my-4">
            <span className="border-green-400 border-4 rounded-full p-2">
              {movieDetail?.vote_average?.toFixed(1)}
            </span>
            Avaliação dos usuários
          </div>

          <h4 className="font-bold">Sinopse</h4>
          <p>{movieDetail?.overview}</p>
        </div>
      </header>
      <main className="m-12">
        <h3 className="text-xl font-bold mb-4">Elenco original</h3>
        <section className="flex w-7/12 gap-4 overflow-scroll overflow-y-hidden">
          {creditList?.map(creditInfo => (
            <CreditsCard key={creditInfo.id} credit={creditInfo} />
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
          {ratedFilms?.map(movieInfo => (
            <MovieCard key={movieInfo.id} movie={movieInfo} />
          ))}
        </section>
      </main>
    </div>
  );
}