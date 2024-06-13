import React, {useEffect} from 'react';
import PostsComponent from "../components/posts/PostsComponent";
import {useAppDispatch} from "../redux/Store";
import {postAction} from "../redux/slices/PostSlice";

const PostsPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;