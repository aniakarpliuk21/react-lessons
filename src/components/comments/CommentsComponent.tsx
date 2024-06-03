import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import CommentComponent from "./CommentComponent";
import './Comments.css'

const CommentsComponent = () => {
    const {commentStore:{allComments}} = useContextProvider();
    return (
        <div className={'comments'}>
            {
                allComments.map(comment => (<CommentComponent key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

export default CommentsComponent;