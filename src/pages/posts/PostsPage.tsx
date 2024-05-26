import React, {useState} from 'react';
import PostsComponent from "./PostsComponent";
import {useParams} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;