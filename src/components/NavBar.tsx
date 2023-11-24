import { Link } from 'react-router-dom'
import logoTMDB from '../assets/logo.svg'

export function NavBar() {
  return (
    <nav className='bg-secondary w-full flex p-4'>
      <Link to={'/home'}>
        <img src={logoTMDB} width={150} alt="Logo TMDB" />
      </Link>
    </nav>
  )
}