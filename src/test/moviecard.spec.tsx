import { render, screen } from '@testing-library/react'
import MovieCard from '../components/MovieCard'
import { BrowserRouter } from 'react-router-dom'

const movieData: Movie.IMovie = {
  id: 1,
  title: 'Movie Teste',
  poster_path: '/5MPdNRHzd0NbOJbrrXO77DVHP4n.jpg'
}

describe('Movie Card', () => {
  test('should render props', () => {
   render(
      <BrowserRouter>
        <MovieCard
          movie={movieData}
        />
      </BrowserRouter>
    )
    expect(screen.findAllByTestId('card-test')).toBeDefined()
  })
})
