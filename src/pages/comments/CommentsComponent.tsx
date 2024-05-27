import React, {FC, useEffect, useState} from 'react';
import {commentServise} from "../../services/comment.services";
import CommentComponent from "./CommentComponent";
import {ICommentModel} from "../../models/ICommentModel";
import './Comment.css'

const CommentsComponent:FC = () => {
    const [comments,setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        commentServise.getAllComment().then(({data}) => setComments(data))
    }, []);
    return (
        <div className={'comments'}>
            {
                comments.map((comment) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;