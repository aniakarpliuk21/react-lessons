import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import PostComponent from "./PostComponent";
import './Post.css'

const PostsComponent = () => {
    const {postStore:{allPosts}} = useContextProvider();
    return (
        <div className={'posts'}>
            {
                allPosts.map(post => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;