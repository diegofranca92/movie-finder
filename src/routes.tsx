import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <h1>Página não encontrada</h1>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/home'} />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetail />,
      }
    ]
  }
])
