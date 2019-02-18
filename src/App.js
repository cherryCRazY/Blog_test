//Core
import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

//Components
import Post from "./Components/Post";

//Containers
import Layout from "./containers/Layout";

const All = () => <h1>ALL Post</h1>;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/post" exact component={Post} />
                    <Route path="/" exact component={Layout} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
