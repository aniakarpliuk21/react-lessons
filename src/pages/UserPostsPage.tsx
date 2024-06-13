import React, {useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/Store";
import {UserPostsType} from "../models/UserPostsType";
import UserPostsComponent from "../components/userPost/UserPostsComponent";
import {userAction} from "../redux/slices/UserSlice";
import {postAction} from "../redux/slices/PostSlice";

const UserPostsPage = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userSlice.users);
    const posts = useAppSelector(state => state.postSlice.posts);

    useEffect(() => {
        dispatch(userAction.loadUsers());
        dispatch(postAction.loadPosts());
    }, [dispatch]);

    const postsOfUser = useMemo(() => {
        return users.map(user => ({
            ...user,
            posts: posts.filter(post => post.userId === user.id)
        }));
    }, [users, posts]);
    return (
        <div>
            <UserPostsComponent userPosts={postsOfUser}/>
        </div>
    );
}

export default UserPostsPage;