import React, {FC} from 'react';
import {PostCommentsType} from "../../models/PostCommentsType";
interface IProps{
    postComment:PostCommentsType
}
const PostCommentComponent:FC<IProps> = ({postComment}) => {
    return (
        <div>
            <h4>{postComment.id}.{postComment.title}</h4>
            <ul>
                {
                    postComment.comments.map((comment) => (
                        <li key={comment.id}>{comment.body}</li>))
                }
            </ul>
        </div>
    );
};

export default PostCommentComponent;