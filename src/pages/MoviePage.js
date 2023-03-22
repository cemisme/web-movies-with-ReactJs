import React, { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../components/movie/index.scss";
import { fetcher } from "../apiConfig/config";
import "swiper/scss";
import useSWR from "swr";
import ReactPaginate from "react-paginate";
import MovieCard from "components/movie/MovieCard";
import useDebounce from "hooks/useDebounce";
const cx = classNames.bind(styles);
const itemsPerPage = 20;

const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=249f34542834dc9fbc4163f7865a3fab"
    );
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
    const [datas, setDatas] = useState([]);
    const { data } = useSWR(url, fetcher);
    useEffect(() => {
      if (!data || !data.total_results) return;
      setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);
  useEffect(() => {
    if (filterDebounce)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=249f34542834dc9fbc4163f7865a3fab&query=${filterDebounce}&page=${nextPage}`
      );
    else
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=249f34542834dc9fbc4163f7865a3fab&page=${nextPage}`
      );
  }, [filterDebounce, nextPage]);
  useEffect(() => {
    if (data && data.results) {
      setDatas(data.results);
    }
  }, [data]);

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("moviespage-search")}>
          <div className={cx("moviespage-searchinput")}>
            <input
              onChange={handleFilterChange}
              placeholder="Type here to search..."
            ></input>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className={cx("moviespage-items")}>
          {datas.length > 0 &&
            datas.map((data) => {
              return (
                <div className={cx("moviespage-item")}>
                  <MovieCard
                    name={data.original_title}
                    vote={data.vote_average}
                    img={data.backdrop_path}
                    date={data.release_date}
                    id={data.id}
                  ></MovieCard>
                </div>
              );
            })}
        </div>
        <div className="paginations">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
      </div>
    </>
  );
};

export default MoviePage;
