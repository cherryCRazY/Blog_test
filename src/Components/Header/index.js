//Core
import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import Styles from "./styles.module.scss";

//logo
import logo from "../../assets/images/logo.png";

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
                    to="/help"
                    className={Styles.HeaderItem}
                    activeClassName={Styles.active}
                >
                    Help
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/create"
                    className={Styles.HeaderItem}
                    activeClassName={Styles.active}
                >
                    Create
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
