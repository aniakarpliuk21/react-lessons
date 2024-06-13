import React, {FC} from 'react';
import {PostCommentsType} from "../../models/PostCommentsType";
import PostCommentComponent from "./PostCommentComponent";
interface IProps{
    postComments:PostCommentsType[]
}
const PostCommentsComponent:FC<IProps> = ({postComments}) => {
    return (
        <div>
            {
                postComments.map(postComment => <PostCommentComponent key={postComment.id} postComment={postComment}/>)
            }
        </div>
    );
};

export default PostCommentsComponent;