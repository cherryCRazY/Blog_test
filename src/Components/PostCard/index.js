//Core
import React from "react";

//Components
import { Card, Avatar } from "antd";

//Styles
import Styles from "./styles.module.scss";

//Itils
import moment from "moment";

const { Meta } = Card;

const PostCard = props => {
    console.log(props);
    const { title, id, body, date, author, history } = props;
    return (
        <Card
            onClick={() => history.push(`/post/${id}`)}
            className={Styles.Post}
            style={{ maxWidth: 300 }}
            hoverable
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <div className={Styles.postData}>
                <div>{author ? `Author ${author}` : null}</div>
                <div>
                    {date ? moment(date).format(" MMMM DD YYYY  HH:mm ") : null}
                </div>
            </div>
            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={title}
                description={body
                    .split(" ")
                    .slice(0, 6)
                    .join(" ")}
            />
        </Card>
    );
};

export default PostCard;
