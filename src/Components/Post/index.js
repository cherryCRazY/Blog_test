//Core
import React from "react";
import { connect } from "react-redux";

//Components
import { Card } from "antd";
import { Comment, Avatar } from "antd";
import CommentList from "../CommentList";
import Editor from "../Editor";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";

//Styles
import Styles from "./styles.module.scss";

//Itils
import moment from "moment";

//Actions
import blogAction from "../../bus/blog/actions";

class Post extends React.Component {
    state = {
        value: ""
    };
    componentDidMount() {
        this.props.onReceivePost(this.props.match.params.postId);
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }
        const id = this.props.post.id;
        this.props.onAddComment({ postId: id, body: this.state.value });
        this.setState({ value: "" });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        const { submitting, value } = this.state;
        const { post } = this.props;
        const comments = post ? post.comments : [{}];

        return (
            <>
                <Spinner />
                <Modal />
                <Card title={post && post.title} className={Styles.Post}>
                    <section className={Styles.body}>
                        {post && post.body}
                        <div className={Styles.Author}>
                            <div>
                                {post && post.author
                                    ? `Author  "${post.author}"`
                                    : null}
                            </div>
                            <div>
                                {post && post.date
                                    ? moment(post.date).format(
                                          " MMMM DD YYYY  HH:mm "
                                      )
                                    : null}
                            </div>
                        </div>
                    </section>

                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <Editor
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    />
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => ({
    post: state.blog.get("post")
});

const mapDispatchToProps = dispatch => ({
    onReceivePost: id => dispatch(blogAction.receivePostAsync(id)),
    onAddComment: comment => dispatch(blogAction.addCommentAsync(comment))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
