import React, {FC, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import './Comments.css'
import {useStore} from "../../store/Store";
interface IProps{
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    const {commentStore:{setFavoriteComment}} = useStore();
    return (
        <div className={'comment'}>
            <h3>{comment.id} {comment.name}</h3>
            <p>Email - {comment.email}</p>
            <p>Post Id - {comment.postId}</p>
            <p>{comment.body}</p>
            <button onClick={()=>{
                setFavoriteComment(comment)
            }}>Favorite comment</button>
        </div>
    );
};

export default CommentComponent;