import React, { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "../components/movie/index.scss";
import "swiper/scss";
import MovieList from "../components/movie/MovieList";
const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("container")}>
     
      <div className={cx("nowplaying")}>
        <span>Now Playing</span>
        <MovieList type="now_playing"></MovieList>
      </div>
      <div className={cx("toprate")}>
        <span>Top rated movies</span>
        <MovieList type="top_rated"></MovieList>
      </div>
      <div className={cx("commingsoon")}>
        <span>Up Comming</span>
        <MovieList type="upcoming"></MovieList>
      </div>
    </div>
  );
};

export default HomePage;
