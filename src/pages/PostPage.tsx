import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/Store";
import {userAction} from "../redux/slices/UserSlice";
import {postAction} from "../redux/slices/PostSlice";


const PostPage = () => {
    let {id}= useParams();
    const dispatch = useAppDispatch();
    const {post} = useAppSelector(state => state.postSlice)
    useEffect(() => {
        dispatch(postAction.loadPostById(id))
    }, [id]);
    return (
        <div>
            {
                post && <div className={'post'}>
                    <h3>{post.id} {post.title}</h3>
                    <p>User ID-{post.userId}</p>
                    <p>{post.body}</p>
                </div>
            }
        </div>
    );
};

export default PostPage;