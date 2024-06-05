import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'
import {IUserModel} from "../../models/IUserModel";
import {IPostModel} from "../../models/IPostModel";
interface IProps {
    favoriteUser:IUserModel | null,
    favoritePost:IPostModel | null
}
const HeaderComponent:FC<IProps> = ({favoriteUser,favoritePost}) => {

    return (
        <div className={'header'}>
            <span><NavLink to={'/'}>Home</NavLink></span>
            <span><NavLink to={'users'}>Users</NavLink></span>
            <span><NavLink to={'posts'}>Posts</NavLink></span>
            <span><NavLink to={'userPosts'}>User Posts</NavLink></span>
            <span><NavLink to={'comments'}>Comments</NavLink></span>
            <span><NavLink to={'postComments'}>Post Comments</NavLink></span>
            {favoriteUser && <div className={'favoriteUser'}>Favorite user-{favoriteUser.username}</div>}
            {favoritePost && <div className={'favoritePost'}>Favorite post:{favoritePost.title}</div>}
        </div>
    );
};

export default HeaderComponent;