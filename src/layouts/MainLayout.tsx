import React, {useEffect, useState} from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/footer/FooterComponent";
import {useStore} from "../store/Store";
import {commentService, postService, userService} from "../services/jph.api.services";


const MainLayout = () => {
    const  {userStore,postStore,commentStore} = useStore();
    useEffect(() => {
        userService.getUsers().then(value=>userStore.loadUsers(value.data));
        postService.getPosts().then(value=>postStore.loadPosts(value.data))
        commentService.getComments().then(value=>commentStore.loadComments(value.data))
    }, []);
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;