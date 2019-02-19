//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Spinner from "../../Components/UI/Spinner";
import modal from "../../Components/UI/Modal";
import Posts from "../Posts";

//Styles
import Styles from "./styles.module.scss";

import blogAction from "../../bus/blog/actions";

class Layout extends Component {
    componentDidMount() {
        this.props.getListOfPosts();
    }
    render() {
        const { isFetching, errorLabel, errorMessage, posts } = this.props;
        return (
            <>
                {errorLabel ? modal("error", errorMessage) : null}

                {isFetching ? (
                    <Spinner />
                ) : (
                    <main className={Styles.Layout}>
                        <Header className={Styles.header} />
                        <div>
                            <Posts data={posts} />
                        </div>
                        <Footer />
                    </main>
                )}
            </>
        );
    }
}
const mapStateToProps = state => ({
    isFetching: state.ui.get("isFetching"),
    errorLabel: state.ui.get("errorLabel"),
    errorMessage: state.ui.get("errorMessage"),
    posts: state.blog.get("posts").toJS()
});

const mapDispatchToProps = dispatch => ({
    getListOfPosts: () => dispatch(blogAction.getListOfPostsAsync())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
