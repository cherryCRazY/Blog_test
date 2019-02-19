//Core
import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import Styles from "./styles.module.scss";

//logo
import logo from "../../themes/assets/images/logo.png";

const Header = () => {
    return (
        <header className={Styles.header}>
            <NavLink to="/">
                <img src={logo} alt="logo" className={Styles.img} />
            </NavLink>
            <div className={Styles.HeaderItem}>
                <NavLink
                    to="/"
                    exact
                    className={Styles.HeaderItem}
                    activeClassName={Styles.activeItem}
                >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/post/create"
                    exact
                    className={Styles.HeaderItem}
                    activeClassName={Styles.activeItem}
                >
                    Create
                </NavLink>
            </div>
            <div>
                <a href="https://www.google.com/" className={Styles.HeaderItem}>
                    Help
                </a>
            </div>
        </header>
    );
};

export default Header;
