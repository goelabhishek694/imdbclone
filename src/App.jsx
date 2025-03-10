import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import {Routes, Route} from "react-router-dom";
import Context from './poc/Context'
import MovieContextWrapper from './context/MovieContext'

function App() {

  return (
    <MovieContextWrapper>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/watchlist" element={ <WatchList/> }></Route>
    </Routes>
    {/* <Context/> */}
    </MovieContextWrapper>
  )
}

export default App
