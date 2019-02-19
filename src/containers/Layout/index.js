//Core
import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";

//Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Posts from "../Posts";
import Post from "../../Components/Post";

//Styles
import Styles from "./styles.module.scss";

class Layout extends Component {
    render() {
        return (
            <main className={Styles.Layout}>
                <Header className={Styles.header} />
                <div className={Styles.Context}>
                    <Router history={this.props.history}>
                        <Switch>
                            <Route path="/" exact component={Posts} />
                            <Route
                                path="/post/:postId"
                                exact
                                component={Post}
                            />
                        </Switch>
                    </Router>
                </div>
                <Footer />
            </main>
        );
    }
}

export default Layout;
