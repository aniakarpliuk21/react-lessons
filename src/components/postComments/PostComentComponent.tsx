import React, {FC} from 'react';
import {PostCommentsType} from "../../models/PostCommentsType";
interface IProps{
    postComments:PostCommentsType
}
const PostCommentComponent:FC<IProps> = ({postComments}) => {
    return (
        <div>
            <h4>{postComments.id}.{postComments.title}</h4>
            <ul>
                {
                    postComments.comments.map((comment) => (<li key={comment.id}>{comment.body}</li>))
                }
            </ul>
        </div>
    );
};

export default PostCommentComponent;