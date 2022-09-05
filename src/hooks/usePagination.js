import {useMemo} from "react";

export const usePagination = (totalPosts, limit) => {
    return useMemo(() => {
        let result = [];
        const totalPages = Math.ceil(totalPosts / limit);
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        return result;
    }, [totalPosts, limit])
}