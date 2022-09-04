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

function App() {
    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState({sortOption: '', searchQuery: ''});
    const [modal, setModal] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const postList = usePosts(posts, filter.sortOption, filter.searchQuery);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter(currentPost => currentPost.id !== post.id))
    }

    async function fetchPosts() {
        const posts = await PostService.getAll();
        setPosts(posts);
    }

    React.useEffect(() => {
        fetchPosts().then(() => {
            setIsLoading(false);
        });
    }, [])

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
                : <PostList
                    posts={postList}
                    removePost={removePost}
                    title="Посты про JS"
                    />
            }
        </div>
    );

}

export default App;
