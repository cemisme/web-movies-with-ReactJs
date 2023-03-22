
import React from "react";
import classNames from "classnames/bind";
import styles from "../../components/movie/index.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const MovieCard = ({name, vote, img, date, id}) => {
  const navigate=useNavigate()
    return (
        <div className={cx("card-item")}>
              
                <img
                  src= {`https://image.tmdb.org/t/p/w500/${img}`}
                  alt="hinhanh"
                ></img>
             
             <div className= {cx('cart-content')}>
                <div className={cx("nowplaying-item--headercontent")}>
                 { name}
                </div>
                <div className={cx("nowplaying-item--inforcontent")}>
                  <div className={cx("nowplaying-item--yearcontent")}>{new Date(date).getFullYear()}</div>
                  <div className={cx("nowplaying-item--ratecontent")}>{vote}</div>
                </div>
                <div onClick={()=>navigate(`/movies/${id}`)} className={cx("nowplaying-item--button")}>Watch now</div>
             </div>
            </div>
    );
};

export default MovieCard;