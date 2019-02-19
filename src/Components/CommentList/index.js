//Core
import React from "react";

//Components
import { Comment, Tooltip, List } from "antd";

//Itils
import moment from "moment";

const CommentList = ({ comments }) => {
    const newData = comments.map(c => ({
        content: <p style={{ textAlign: "start" }}>{c.body}</p>,
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
export default CommentList;
