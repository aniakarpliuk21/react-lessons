import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Post.css'
interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div className={'post'}>
            <h3>{post.id} {post.title}</h3>
            <p>User ID-{post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;