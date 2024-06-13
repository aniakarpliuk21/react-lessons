import React from 'react';
import {useAppSelector} from "../../redux/Store";
import PostComponent from "./PostComponent";
import './Post.css'

const PostsComponent = () => {
    let {posts,isLoaded} = useAppSelector(state => state.postSlice);
    return (
        <div className={'posts'}>
            {
              isLoaded ?
                  posts.map(post=><PostComponent key={post.id} post={post}/>)
                  :
                  <h3>Loading...</h3>
            }
        </div>
    );
};

export default PostsComponent;