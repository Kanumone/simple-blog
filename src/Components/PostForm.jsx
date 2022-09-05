import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/buttons/MyButton";

export default function PostForm({createPost}) {
    const [post, setPost] = React.useState({
        title: '',
        body: ''
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...post
        };
        createPost(newPost);
        setPost({title: '', body: ''});
    }

    return (
      <form>
          <MyInput
              value={post.title}
              onChange={event => setPost({...post, title: event.target.value})}
              type="text"
              placeholder="Название"/>
          <MyInput
              value={post.body}
              onChange={event => setPost({...post, body: event.target.value})}
              type="text"
              placeholder="Описание"/>
          <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
    );
};