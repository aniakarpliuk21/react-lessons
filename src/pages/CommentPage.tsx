import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/Store";
import {commentAction} from "../redux/slices/CommentSlice";
import "../components/comments/Comments.css"

const CommentPage = () => {
    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {comment} = useAppSelector(state => state.commentSlice);
    useEffect(() => {
        dispatch(commentAction.loadCommentById(id))
    }, [id]);
    return (
        <div>
            {comment && <div className={'comment'}>
                <h3>{comment.id} {comment.name}</h3>
                <p>Email - {comment.email}</p>
                <p>Post Id - {comment.postId}</p>
                <p>{comment.body}</p>
            </div>}
        </div>
    );
};

export default CommentPage;