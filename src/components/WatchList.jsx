import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import genre from "../utility";
function WatchList() {
  const {watchlist, setWatchlist, removeFromWatchlist} = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] =  useState([]);
  const [currGenre, setCurrGenre] =  useState("All Genres");


  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(data);
  }, []);
  const handleAscendingRating = () => {
    console.log("sort low to high");
    watchlist.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average;
    });
    console.log(watchlist);

    setWatchlist([...watchlist]);
  };

  const handleDescendingRating = () => {
    console.log("sort high to low");
    watchlist.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average;
    });
    console.log(watchlist);

    setWatchlist([...watchlist]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    let temp = watchlist.map(movie=>genre[movie.genre_ids[0]]);
    console.log(temp);
    temp = new Set(temp);
    console.log(temp);
    setGenreList(["All Genres", ...temp]);
    
  },[watchlist]);

  const handleFilter = (genre) => {
    console.log(genre);
    
    setCurrGenre(genre);
  }

  return (
    <>
      <div className="flex justify-center mx-4 gap-8 my-4">
        {
      genreList.map((genre, idx) =>  (
        <div 
        key = {idx}
        className= { currGenre == genre ? "flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold rounded-xl" : "flex justify-center items-center bg-gray-400/50 h-[3rem] w-[9rem] text-white font-bold rounded-xl"}
        onClick={() => handleFilter(genre)}
        >{genre}</div>
        ))
      }
      </div>
    
      {/* search movies */}
      <div>
        <input 
        type="text"
        className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600" 
        placeholder="Search Movies"
        onChange={handleSearch}
        value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <i
                    class="fa-solid fa-arrow-up"
                    onClick={handleAscendingRating}
                  ></i>
                  <div>Ratings</div>
                  <i
                    class="fa-solid fa-arrow-down"
                    onClick={handleDescendingRating}
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Delete</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist
            .filter((movieObj) => {
              if(currGenre == "All Genres"){
                return true;
              }else{
                return genre[movieObj.genre_ids[0]] == currGenre
              }
            })
            .filter(movieObj => movieObj.title.toLowerCase().includes(search.toLowerCase()))
            .map(
              (
                movieObj,
                idx
              ) => {
                return (
                  <tr className="hover:bg-gray-50" key={idx}>
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img
                        className="h-[6rem] w-[10rem] object-fit"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt=""
                      />
                      <div className="font-medium text-gray-700 text-sm">
                        {movieObj.title}
                      </div>
                    </td>
                    <td className="pl-6 py-4">{movieObj.vote_average}</td>
                    <td className="pl-6 py-4">{movieObj.popularity}</td>
                    <td className="pl-2 py-4">{genre[movieObj.genre_ids[0]]}</td>
                    <td className="pl-2 py-4 text-red-600" onClick={() => removeFromWatchlist(movieObj)}><i class="fa-solid fa-trash"></i></td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
