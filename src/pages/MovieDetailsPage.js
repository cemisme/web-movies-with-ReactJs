import React, { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../components/movie/index.scss";
import { fetcher } from "../apiConfig/config";
import "swiper/scss";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import MovieCredits from "components/movie/MovieCredits";
import MovieVideos from "components/movie/MovieVideos";
const cx = classNames.bind(styles);

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=249f34542834dc9fbc4163f7865a3fab`,
    fetcher
  );
  console.log(data);
  if (!data) {
    return null;
  } else
    return (
      <>
        <div className={cx("detailmovies")}>
          <div className={cx("wrapper-blur")}></div>
          <div
            className={cx("detailmovies-banner")}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            }}
          ></div>
        </div>
        <div className={cx("detailmovies-imgcenter")}>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt="hinh anh"
          ></img>
        </div>
        <div className={cx("detailmovies-title")}>
          <h1>{data.title}</h1>
        </div>
        <div className={cx("detailmovies-category")}>
          {data.genres &&
            data.genres.map((item) => {
              return <span key={item.id}>{item.name}</span>;
            })}
        </div>
        <div className={cx("detailmovies-overview")}>{data.overview}</div>
        <MovieCredits id={id}></MovieCredits>
        <MovieVideos id={id}></MovieVideos>
      </>
    );
};

export default MovieDetailsPage;
