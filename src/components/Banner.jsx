import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [bannerImage, setBannerImage] = useState(
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
  );
  const [title, setTitle] = useState("Placeholder Movie");

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1";
      const resp = (await axios.get(url)).data.results[0];
      console.log(resp);
      
      setBannerImage(resp.backdrop_path);
      setTitle(resp.title);
      
    }
    fetchData();
  }, []);
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-3xl">{title}</div>
    </div>
  );
}

export default Banner;
