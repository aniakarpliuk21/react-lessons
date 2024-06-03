import React, {FC} from 'react';
import {PostCommentsType} from "../../models/PostCommentsType";
import PostCommentComponent from "./PostComentComponent";

interface IProps{
    postsComments:PostCommentsType[]
}
const PostCommentsComponent:FC<IProps> = ({postsComments}) => {
    return (
        <div>
            {
                postsComments.map((postComments) => (<PostCommentComponent key={postComments.id} postComments={postComments}/>))
            }
        </div>
    );
};

export default PostCommentsComponent;