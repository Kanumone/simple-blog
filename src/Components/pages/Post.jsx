import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from '../../API/PostService'
import {useFetching} from "../../hooks/useFetching";
import Loader from "../UI/loader/Loader";
import Comments from "../Comment";

const Post = () => {
    const postId = useParams().id;
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchById, isPostLoading, postError] = useFetching(async (id) => {
        const res = await PostService.getById(id);
        setPost(res.data)
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const res = await PostService.getCommentsByPostId(id);
        setComments(res.data)
    })

    useEffect(() => {
        fetchById(postId);
        fetchComments(postId);
    },[]);

    return (
        <div>
            {isPostLoading ? <Loader/>
            : postError || comError ? <h1>Ошибка</h1>:
                    <h1>{post.title}</h1>}
            {isComLoading ? <Loader/>
            : <Comments key={Date.now()} comments={comments}/> }
        </div>
    );
};

export default Post;