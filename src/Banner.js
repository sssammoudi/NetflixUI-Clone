import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const imgURL = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflix);
      let movie_num = Math.floor(
        Math.random() * request.data.results.length - 1
      );

      setMovies(request.data.results[movie_num]);
      return request;
    }
    fetchData();
  }, []);

  function shrink(str, n, next = "") {
    return str?.slice(0, n) + next;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imgURL + movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        {/*<div className="banner_btns">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My list</button>
        </div>*/}
        <h1 className="banner__desc">{shrink(movie?.overview, 1000)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
export default Banner;
