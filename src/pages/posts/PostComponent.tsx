import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useNavigate} from "react-router-dom";
interface IProps {
    post:IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>{post.id}.User Id - {post.userId},{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => navigate(post.id.toString())}>Comments</button>
        </div>
    );
};

export default PostComponent;