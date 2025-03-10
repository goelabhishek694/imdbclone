import React, { useEffect, useState } from "react";
export const MovieContext = React.createContext();

export default function MovieContextWrapper({children}){
    const [watchlist, setWatchlist] = useState([]);

    //add method
    const handleAddWatchlist = (movieObj) => {
        let updatedWatchlist = [...watchlist, movieObj];
        setWatchlist(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }

    //remove method
    const removeFromWatchlist = (movie) => {
        let restOfTheMovies = watchlist.filter(movieObj => {
          return movieObj.id != movie.id
        })
        setWatchlist(restOfTheMovies);
        localStorage.setItem("watchlist", JSON.stringify(restOfTheMovies));
    }

    useEffect(() => {
        let moviesFromLocalStorage = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(moviesFromLocalStorage);
    },[]);

    return <MovieContext.Provider value = {{watchlist, setWatchlist, handleAddWatchlist, removeFromWatchlist}}>{children}</MovieContext.Provider>
};