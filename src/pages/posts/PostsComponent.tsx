import React, {FC, useEffect, useState} from 'react';
import {postServise} from "../../services/post.services";
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";

const PostsComponent:FC = () => {
    const [posts,setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        postServise.getAllPosts().then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map((post) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;