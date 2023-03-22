import React, { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "../components/movie/index.scss";
import "swiper/scss";
import { NavLink } from "react-router-dom";


const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx("header")}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#d23965" : "white" })}>Home</NavLink>
        <NavLink to="/movies" style={({ isActive }) => ({ color: isActive ? "#d23965" : "white" })}>Movies</NavLink>
      </header>
    );
};

export default Header;