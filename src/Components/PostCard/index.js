//Core
import React from "react";

//Components
import { Card, Icon, Avatar } from "antd";

//Styles
import Styles from "./styles.module.scss";

//Itils
import moment from "moment";

const { Meta } = Card;

const PostCard = props => {
    const { title, id, body, onSetting, onAddComment, date, author } = props;
    console.log(props);
    return (
        <Card
            onClick={() => console.log(id)}
            className={Styles.Post}
            style={{ maxWidth: 300 }}
            hoverable
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <Icon type="setting" onClick={() => onSetting()} />,
                <Icon type="plus-circle" onClick={() => onAddComment()} />
            ]}
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
                description={body}
            />
        </Card>
    );
};

export default PostCard;
