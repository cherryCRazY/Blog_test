//Core
import React from "react";

//Components
import { Form, Button, Input } from "antd";

const TextArea = Input.TextArea;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea
                style={{ resize: "none" }}
                rows={4}
                onChange={onChange}
                value={value}
            />
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

export default Editor;
