import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

const All = () => <h1>ALL Post</h1>;
const Post = props => (console.log(props), <h1>Post</h1>);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={All} />
                    <Route path="/posts/:postId" exact render={Post} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
