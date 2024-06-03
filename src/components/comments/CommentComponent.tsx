import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import './Comments.css'
interface IProps{
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div className={'comment'}>
            <h3>{comment.id} {comment.name}</h3>
            <p>Email - {comment.email}</p>
            <p>Post Id - {comment.postId}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;