//Core
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Posts from "../Posts";
import Post from "../../Components/Post";
import PostBuilder from "../../Components/PostBuilder";

//Styles
import Styles from "./styles.module.scss";

class Layout extends Component {
    render() {
        return (
            <main className={Styles.Layout}>
                <Header className={Styles.header} />
                <div className={Styles.Context}>
                    <Switch>
                        <Route path="/" exact component={Posts} />
                        <Route
                            path="/post/create"
                            exact
                            component={PostBuilder}
                        />
                        <Route path="/post/:postId" exact component={Post} />
                    </Switch>
                </div>
                <Footer />
            </main>
        );
    }
}

export default Layout;
