//Core
import React, { Component } from "react";

//Components
import PostCard from "../../Components/PostCard";
//Styles
import Styles from "./styles.module.scss";

class Posts extends Component {
    render() {
        console.log(this.props.data);
        const posts = this.props.data.map(p => (
            <PostCard
                key={p.id}
                id={p.id}
                title={p.title}
                body={p.body}
                author={p.author}
                date={p.date}
            />
        ));

        return <div className={Styles.Posts}>{posts}</div>;
    }
}

export default Posts;
