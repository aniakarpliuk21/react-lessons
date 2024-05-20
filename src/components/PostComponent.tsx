import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
interface IProps {
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h2>{post?.id}{post?.title}</h2>
            <p>{post?.body}{post.userId}</p>
        </div>
    );
};

export default PostComponent;