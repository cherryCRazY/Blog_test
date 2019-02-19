//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import Modal from "../UI/Modal";
import Spinner from "../UI/Spinner";
import { Form, Input, Button, Spin, Skeleton } from "antd";

//Actions
import blogActions from "../../bus/blog/actions";

const { TextArea } = Input;

class PostBuilder extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const post = {
                    title: values.title,
                    body: values.body.trim()
                };
                this.props.onAddNewPost(post);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { isFetching } = this.props;
        return (
            <>
                <Spinner />
                <Modal />
                {isFetching ? (
                    <Spin tip="Loading...">
                        <Skeleton />
                    </Spin>
                ) : (
                    <Form
                        onSubmit={this.handleSubmit}
                        style={{ maxWidth: "50VW" }}
                        layout="vertical"
                    >
                        <div
                            style={{
                                transform: "translate(50%)",
                                left: "50%",
                                margin: "10vh"
                            }}
                        >
                            <h1>Create new Post</h1>
                            <Form.Item label="Title" hasFeedback>
                                {getFieldDecorator("title", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please input title  of  post"
                                        }
                                    ]
                                })(
                                    <Input placeholder="Please input title  of  post" />
                                )}
                            </Form.Item>
                            <Form.Item label="Body" hasFeedback>
                                {getFieldDecorator("body", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please input description of post"
                                        }
                                    ]
                                })(
                                    <TextArea
                                        size="large"
                                        style={{ resize: "none" }}
                                        autosize={{ minRows: 2 }}
                                        placeholder="Please input description of post"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label="  ">
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                )}
            </>
        );
    }
}
const mapStateToProps = state => ({
    isFetching: state.ui.get("isFetching")
});
const mapDispatchToProps = dispatch => ({
    onAddNewPost: post => dispatch(blogActions.addNewPostAsync(post))
});

const WrappedApp = Form.create({ name: "coordinated" })(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PostBuilder)
);

export default WrappedApp;
