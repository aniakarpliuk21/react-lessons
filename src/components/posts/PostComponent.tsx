import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Post.css'
import {useNavigate} from "react-router-dom";
interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    let navigate = useNavigate();
    return (
        <div className={'post'}>
            <h3>{post.id} {post.title}</h3>
            <p>User ID-{post.userId}</p>
            <p>{post.body}</p>
            <button onClick={() => {
                navigate(post.id.toString())
            }}>Details
            </button>
        </div>
    );
};

export default PostComponent;