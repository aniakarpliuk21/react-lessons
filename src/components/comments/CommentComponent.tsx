import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {useNavigate} from "react-router-dom";
import './Comments.css'
interface IProps{
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    let navigate = useNavigate()
    return (
        <div className={'comment'}>
            <h3>{comment.id} {comment.name}</h3>
            <p>Email - {comment.email}</p>
            <p>Post Id - {comment.postId}</p>
            <p>{comment.body}</p>
            <button onClick={() => {
                navigate(comment.id.toString())
            }}>Details</button>
        </div>
    );
};

export default CommentComponent;