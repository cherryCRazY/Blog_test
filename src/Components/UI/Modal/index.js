import { Modal } from "antd";

const error = (type, message) => {
    Modal[type]({
        title: "Something went wrong",
        content: message
    });
};

export default error;
