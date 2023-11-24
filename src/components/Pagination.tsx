import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieCard from './MovieCard';
import api from '../services/api';

interface PaginationProps {
  itemsPerPage: number;
}

interface ItemsProps {
  currentItems: Movie.IMovie[];
}

function CardList({ currentItems }: ItemsProps) {

  return (
    <main className="flex flex-wrap gap-4 p-8 justify-center">
      {currentItems &&
        currentItems.map((movieInfo) => (
          <MovieCard key={movieInfo.id} movie={movieInfo} />
        ))}
    </main>
  );
}

export function Pagination({ itemsPerPage }: PaginationProps) {

  const [itemOffset, setItemOffset] = useState(0);
  const [movieList, setMovieList] = useState<Movie.IMovie[]>([])


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = movieList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movieList.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % movieList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  async function getMovies() {
    try {
      const { data } = await api.get('/movie/now_playing?language=pt-BR&page=1')
      setMovieList(data.results)
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <CardList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        className='flex gap-4 justify-center mb-8'
        pageClassName='font-bold'
        nextClassName='font-extrabold text-blue-500'
        previousClassName='font-extrabold text-blue-500'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}