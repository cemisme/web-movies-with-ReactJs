import React, { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../../components/movie/index.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "../../apiConfig/config";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/scss";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const Banner = () => {
  SwiperCore.use([Autoplay]);
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=249f34542834dc9fbc4163f7865a3fab`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setDatas(data.results);
  }, [data]);

  return (
    <Swiper grabCursor={"true"} spaceBetween={40} autoplay={{ delay: 2300 }}>
      {datas.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <div className={cx("container")}>
              <div className={cx("content")}>
                <div className={cx("overlay")}></div>
                <div className={cx("content-img")}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                    alt="hinhanh"
                  ></img>
                </div>
                <div className={cx("content-infor")}>
                  <div className={cx("content-infor--namemovie")}>
                    {data.original_title}
                  </div>
                  <div className={cx("content-infor--actions")}>
                    <span>Action</span>
                    <span>Adventure</span>
                    <span>Drama</span>
                  </div>
                  <div
                    onClick={() => navigate(`/movies/${data.id}`)}
                    className={cx("content-infor--button")}
                  >
                    Watch
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
