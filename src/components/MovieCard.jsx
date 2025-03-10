import React from "react";

function MovieCard({ movieObj, addToWatchlist, removeFromWatchlist }) {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const isInWatchlist = () => {
    return watchlist.find((movie) => movie.id == movieObj.id);
  };
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col items-end justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObj.title}{" "}
      </div>
      {isInWatchlist() ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => removeFromWatchlist(movieObj)}
        >
          ❌
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => addToWatchlist(movieObj)}
        >
          😍
        </div>
      )}
    </div>
  );
}

export default MovieCard;
