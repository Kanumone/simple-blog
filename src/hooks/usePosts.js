import {useMemo} from "react";

export const useSortedPosts = (posts, sortOption) => {
    return useMemo( () => {
        if (sortOption) {
            return [...posts].sort(
                (first, second) => first[sortOption].localeCompare(second[sortOption])
            );
        } else {
            return posts;
        }
    }, [sortOption, posts])
}

export const usePosts = (posts, sortOption, searchQuery) => {
    const sortedPostList = useSortedPosts(posts, sortOption)
    return useMemo(() => {
        return sortedPostList.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [sortedPostList, searchQuery]);
}
