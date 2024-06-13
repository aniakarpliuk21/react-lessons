import React from 'react';
import {useAppSelector} from "../../redux/Store";
import CommentComponent from "./CommentComponent";
import './Comments.css'

const CommentsComponent = () => {
    const {comments,isLoaded} = useAppSelector(state => state.commentSlice);
    return (
        <div className={'comments'}>
            {
                isLoaded? comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
                    :
                    <h3>Loaded...</h3>
            }
        </div>
    );
};

export default CommentsComponent;