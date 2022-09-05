import React from "react";
import MyButton from "../buttons/MyButton";
import classes from './Pagination.module.css';

export default function Pagination({page, setPage, pagesArray}) {
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
