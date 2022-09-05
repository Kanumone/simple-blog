import React from "react";
import MyButton from "../buttons/MyButton";
import classes from './Pagination.module.css';
import {usePagination} from "../../../hooks/usePagination";

export default function Pagination({page, setPage, totalPosts, limit}) {
    const pagesArray = usePagination(totalPosts, limit);
    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p =>
                <MyButton
                    key={p}
                    onClick={() => setPage(p)}
                    addClass={p === page ? classes.current__page : ''}
                >{p}</MyButton>
            )}
        </div>
    );
}
