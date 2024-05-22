import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
interface IProps {
    post:IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>{post.id}.User Id - {post.userId},{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;