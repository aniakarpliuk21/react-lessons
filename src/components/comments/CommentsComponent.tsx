import React from 'react';
import {useStore} from "../../store/Store";
import CommentComponent from "./CommentComponent";
import './Comments.css'

const CommentsComponent = () => {
    const {commentStore:{allComments}} = useStore();
    return (
        <div className={'comments'}>
            {
                allComments.map(comment => (<CommentComponent key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

export default CommentsComponent;