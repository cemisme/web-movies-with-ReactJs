import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import styles from "../../components/movie/index.scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../apiConfig/config";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const MovieList = ({ type }) => {
  const [datas, setDatas] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=249f34542834dc9fbc4163f7865a3fab`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {setDatas(data.results);
    }
  }, [data]);
  return (
    <>
      <div>
        <div class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
      <div className={cx("nowplaying-allitems")}>
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {datas.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <MovieCard
                  name={data.original_title}
                  vote={data.vote_average}
                  img={data.backdrop_path}
                  date={data.release_date}
                  id={data.id}
                ></MovieCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default MovieList;
