import React, {useEffect, useState} from "react";
import {usePosts} from "../../hooks/usePosts";
import {usePagination} from "../../hooks/usePagination";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import MyModal from "../UI/modal/MyModal";
import PostFilter from "../PostFilter";
import MyButton from "../UI/buttons/MyButton";
import Loader from "../UI/loader/Loader";
import PostList from "../PostList";
import Pagination from "../UI/pagination/Pagination";
import PostForm from "../PostForm";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sortOption: '', searchQuery: ''});
    const [modal, setModal] = useState(false);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0)
    const postList = usePosts(posts, filter.sortOption, filter.searchQuery);
    const pagesArray = usePagination(totalPosts, limit);
    const [fetchPosts, isLoading, errorMsg] = useFetching(async () => {
        const res = await PostService.getAll(limit, page);
        setPosts(res.data);
        setTotalPosts(Number(res.headers['x-total-count']));
    })

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter(currentPost => currentPost.id !== post.id))
    }

    useEffect(() => {
        fetchPosts();
    }, [page])

    return (
        <div>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                :
                    errorMsg ? <h1>Произошла ошибка: {errorMsg}</h1>:
                    <PostList
                    posts={postList}
                    removePost={removePost}
                    title="Список постов"
                    />
            }
            <Pagination
                page={page}
                setPage={setPage}
                pagesArray={pagesArray}
            />
        </div>
    );

}

export default Posts;
