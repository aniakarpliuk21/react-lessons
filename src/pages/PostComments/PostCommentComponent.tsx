import React, {FC} from 'react';
import {IPostCommentModel} from "../../models/IPostCommentModel";
interface IProps{
    postComment:IPostCommentModel
}
const PostCommentComponent:FC<IProps> = ({postComment}) => {
    return (
        <div>
            <p>{postComment.id}.Post Id-{postComment.postId}{postComment.body}</p>
        </div>
    );
};

export default PostCommentComponent;