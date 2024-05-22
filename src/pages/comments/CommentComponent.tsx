import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
interface IProps {
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <p>{comment.id}.Post Id-{comment.postId}{comment.body}</p>
        </div>
    );
};

export default CommentComponent;