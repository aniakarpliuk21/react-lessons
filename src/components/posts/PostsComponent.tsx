import React from 'react';
import PostComponent from "./PostComponent";
import './Post.css'
import {useStore} from "../../store/Store";

const PostsComponent = () => {
    const {postStore:{allPosts}} = useStore();
    return (
        <div className={'posts'}>
            {
                allPosts.map(post => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;