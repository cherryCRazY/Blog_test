//Core
import React from "react";
import { connect } from "react-redux";

//Components
import { Card } from "antd";
import { Comment, Avatar, Form, Button, Tooltip, List, Input } from "antd";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";

//Styles
import Styles from "./styles.module.scss";

//Itils
import moment from "moment";

//Actions
import blogAction from "../../bus/blog/actions";

const TextArea = Input.TextArea;

const CommentList = ({ comments }) => {
    const newData = comments.map(c => ({
        content: <p>{c.body}</p>,
        datetime: (
            <Tooltip
                title={moment(c.date)
                    .subtract(1, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
            >
                <span>
                    {moment(c.date)
                        .subtract(1, "days")
                        .fromNow()}
                </span>
            </Tooltip>
        )
    }));
    return (
        <List
            dataSource={newData}
            itemLayout="horizontal"
            renderItem={props => <Comment {...props} />}
        />
    );
};

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button
                htmlType="submit"
                loading={submitting}
                onClick={onSubmit}
                type="primary"
            >
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

class Post extends React.Component {
    state = {
        value: ""
    };
    componentDidMount() {
        console.log(this.props.match.params.postId);
        this.props.onReceivePost(this.props.match.params.postId);
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }
    };

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        const { submitting, value } = this.state;
        const comments = [];
        console.log(this.props.match.params.postId);
        const { data } = this.props;

        return (
            <>
                {" "}
                <Spinner />
                <Modal />
                <Card title={data && data.title} className={Styles.Post}>
                    <section className={Styles.body}>
                        {data && data.body}
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
    onReceivePost: id => dispatch(blogAction.receivePostAsync(id))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
