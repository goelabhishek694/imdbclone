import React from 'react'
import { Link } from 'react-router-dom'
import imdbLogo from "../../public/imdbLogo.png"
function Navbar() {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4'>
      <Link to="/"><img className="w-[50px]" src={imdbLogo}/></Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/">Movies</Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar
