import React from 'react';
import classes from "./styles/comments.module.css"

const Comments = ({comments}) => {
    return (
        <div className={classes.post__wrapper}>
            <h2>Комментарии</h2>
            {comments.map((comment) =>
                <div key={comment.id} className={classes.post__comment}>
                    <h4>{comment.email}</h4>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>
    );
};

export default Comments;