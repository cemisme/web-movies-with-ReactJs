import React, { useEffect, useState } from "react";
import "swiper/scss";
import styles from "../../components/movie/index.scss";
import useSWR from "swr";
import { fetcher } from "../../apiConfig/config";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const MovieCredits = ({ id }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=249f34542834dc9fbc4163f7865a3fab`,
    fetcher
  );
  if (!data) {
    return null;
  }
  const { cast } = data;

  if (!cast || cast.length <= 0) return null;
  return (
    <>
    <h1 className={cx("movies-credits-header")}>Cast</h1>
      <div className={cx("movies-credits")}>
        {cast&&cast.slice(0, 4).map((item, index) => (
          <div key={index} className={cx("movies-credit")}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt="hinhanh"
            ></img>
            <h3>{item.original_name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCredits;
