import React from "react";
import PostItem from "./PostItem";

export default function PostList(props) {

    if (!props.posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        )
    } else {
        return (
            <div className="post__list">
                <h1>{props.title}</h1>
                {props.posts.map((post, index) => <PostItem number={index + 1} removePost={props.removePost} post={post} key={post.id}/>)}
            </div>
        );
    }
}