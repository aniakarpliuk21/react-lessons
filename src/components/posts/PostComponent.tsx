import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Post.css'
import {useStore} from "../../store/Store";
interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    const {postStore:{setFavoritePost}} = useStore();
    return (
        <div className={'post'}>
            <h3>{post.id} {post.title}</h3>
            <p>User ID-{post.userId}</p>
            <p>{post.body}</p>
            <button onClick={() => {setFavoritePost(post)}}>Favorite post
            </button>
        </div>
    );
};

export default PostComponent;