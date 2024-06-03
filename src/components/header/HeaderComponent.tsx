import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'
const HeaderComponent = () => {

    return (
        <div className={'header'}>
            <span><NavLink to={'/'}>Home</NavLink></span>
            <span><NavLink to={'users'}>Users</NavLink></span>
            <span><NavLink to={'posts'}>Posts</NavLink></span>
            <span><NavLink to={'userPosts'}>User Posts</NavLink></span>
            <span><NavLink to={'comments'}>Comments</NavLink></span>
            <span><NavLink to={'postComments'}>Post Comments</NavLink></span>
        </div>
    );
};

export default HeaderComponent;