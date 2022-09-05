import React from "react";
import PostList from "./Components/PostList";
import './styles/App.css'
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/buttons/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./Components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import Pagination from "./Components/UI/pagination/Pagination";

function App() {
    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState({sortOption: '', searchQuery: ''});
    const [modal, setModal] = React.useState(false);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [totalPosts, setTotalPosts] = React.useState(0)
    const postList = usePosts(posts, filter.sortOption, filter.searchQuery);

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

    React.useEffect(() => {
        fetchPosts();
    }, [page])

    return (
        <div className="App">
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
                    title="Посты про JS"
                    />
            }
            <Pagination
                page={page}
                setPage={setPage}
                totalPosts={totalPosts}
                limit={limit}
            />
        </div>
    );

}

export default App;
