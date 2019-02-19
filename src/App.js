//Core
import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

//Components

//Containers
import Layout from "./containers/Layout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Layout} />
                    <Route path="/post/:postID" exact component={Layout} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
