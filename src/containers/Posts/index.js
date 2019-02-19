//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import PostCard from "../../Components/PostCard";
import Spinner from "../../Components/UI/Spinner";
import Modal from "../../Components/UI/Modal";

//Styles
import Styles from "./styles.module.scss";

//Actions
import blogAction from "../../bus/blog/actions";

class Posts extends Component {
    componentDidMount() {
        this.props.getListOfPosts();
    }
    render() {
        const posts = this.props.posts.map(p => (
            <PostCard
                key={p.id}
                id={p.id}
                title={p.title}
                body={p.body}
                author={p.author}
                date={p.date}
            />
        ));
        return (
            <>
                <Spinner />
                <Modal />
                <div className={Styles.Posts}>{posts}</div>
            </>
        );
    }
}
const mapStateToProps = state => ({
    posts: state.blog.get("posts").toJS()
});

const mapDispatchToProps = dispatch => ({
    getListOfPosts: () => dispatch(blogAction.getListOfPostsAsync())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
