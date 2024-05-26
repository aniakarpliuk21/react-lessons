import React, {FC} from 'react';
import {IPostCommentModel} from "../../models/IPostCommentModel";
import PostCommentComponent from "./PostCommentComponent";
interface IProps {
    postComments:IPostCommentModel[]
}
const PostCommentsComponent:FC<IProps> = ({postComments}) => {
    return (
        <div>
            {
                postComments.map(postComment=><PostCommentComponent postComment={postComment} key={postComment.id}/>)
            }
        </div>
    );
};

export default PostCommentsComponent;