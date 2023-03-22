import React, { useEffect, useState } from "react";
import "swiper/scss";
import styles from "../../components/movie/index.scss";
import useSWR from "swr";
import { fetcher } from "../../apiConfig/config";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const MovieVideos = ({ id }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=249f34542834dc9fbc4163f7865a3fab`,
    fetcher
  );
  if (!data) {
    return null;
  }
  const { results } = data;
  if (results && results.length <= 0) return null;
  return (
    <>
    <h1 className={cx("movies-credits-header")}>Movie Trailers</h1>
      <div className={cx("moives-trailers")}>
        {results.slice(0,2).map((item, index) => (
          <div key={index} className={cx("moives-trailer")}>
            <iframe
              width="1904"
              height="792"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Video Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieVideos;
