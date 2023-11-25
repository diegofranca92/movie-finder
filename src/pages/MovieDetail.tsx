import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import api from "../services/api";
import CreditsCard from '../components/CreditsCard';
import { NavBar } from '../components/NavBar';



export default function MovieDetail() {

  const [movieDetail, setMovieDetail] = useState<Movie.IMovie>()
  const [videoKey, setVideoKey] = useState<string>()
  const [ratedFilms, setRatedFilms] = useState<Movie.IMovie[]>()
  const [creditList, setCreditList] = useState<Movie.ICredit[]>()
  const [genreList, setGenreList] = useState<Movie.IGenre[]>()
  const params = useParams()
  const navigate = useNavigate()
  const movieUrl = import.meta.env.VITE_IMG

  async function getMovie() {
    try {
      const { data } = await api.get(`/movie/${params.id}?language=pt-BR`)
      setMovieDetail(data)
      setGenreList(data.genres)
    } catch (e) {
      console.log(e);
    }
  }

  async function getVideo() {
    try {
      const { data } = await api.get(`/movie/${params.id}/videos?language=pt-BR`)
      setVideoKey(data.results[0].key)
    } catch (e) {
      console.log(e);
    }
  }


  async function getRated() {
    try {
      const { data } = await api.get(`/movie/top_rated?language=pt-BR&page=1`)
      setRatedFilms(data.results)
    } catch (e) {
      console.log(e);
    }
  }
  async function getCredits() {
    try {
      const { data } = await api.get(`/movie/${params.id}/credits?language=pt-BR`)
      setCreditList(data.cast)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMovie()
    getRated()
    getCredits()
    getVideo()
  }, [])

  return (
    <>
      <NavBar />
      <header className="bg-primary text-white p-12 flex md:flex-nowrap flex-wrap gap-4">
        <img
          className="md:-mb-20 shadow-md rounded-md"
          width={250}
          height={350}
          src={movieUrl + movieDetail?.poster_path}
          alt={movieDetail?.title} />
        <div>
          <div className='flex justify-between'>
            <h1 className="text-3xl">{movieDetail?.title}</h1>
            <button className='bg-transparent border-white border-2 px-2 hover:bg-white hover:text-black' onClick={() => navigate(-1)}>voltar</button>
          </div>
          <p>
            {movieDetail?.adult ? '18 anos' : 'livre'} + {movieDetail?.release_date?.split('-').reverse().join('/')}
            ({movieDetail?.original_language?.toLocaleUpperCase()}) + {genreList?.map((gen: Movie.IGenre) => gen.name).join(', ')}
          </p>
          <div className="flex my-4">
            <span className="border-green-400 border-4 rounded-full p-2 me-2">
              {movieDetail?.vote_average?.toFixed(1)}
            </span>
            Avaliação dos <br /> usuários
          </div>

          <h4 className="font-bold">Sinopse</h4>
          <p>{movieDetail?.overview}</p>
        </div>
      </header>
      <main className="m-12">
        <h3 className="text-xl font-bold mb-4">Elenco original</h3>
        <section className="flex gap-4 overflow-scroll overflow-y-hidden">
          {creditList?.map(creditInfo => (
            <CreditsCard key={creditInfo.id} credit={creditInfo} />
          ))}
        </section>
        <h3 className="text-xl font-bold mb-4 mt-12">Trailer</h3>
        <section>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoKey}?si=ZV9nQHwiquv9HQUO`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
        <h3 className="text-xl font-bold mb-4 mt-12">Recomendações</h3>
        <section className="flex gap-4 overflow-scroll overflow-y-hidden">
          {ratedFilms?.map(movieInfo => (
            <MovieCard key={movieInfo.id} movie={movieInfo} />
          ))}
        </section>
      </main>
    </>
  );
}