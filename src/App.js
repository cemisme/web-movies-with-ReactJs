import React, { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "./components/movie/index.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "components/banner/Banner";
import Header from "layout/Header";
import HomePage from "pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "layout/Main";
import MoviePage from "pages/MoviePage";
import MovieDetailsPage from "pages/MovieDetailsPage";
const cx = classNames.bind(styles);
//249f34542834dc9fbc4163f7865a3fab
//https://api.themoviedb.org/3/movie/now_playing?api_key=249f34542834dc9fbc4163f7865a3fab
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          {/* dùng outlet để hiện thỉ các route trong route */}
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
