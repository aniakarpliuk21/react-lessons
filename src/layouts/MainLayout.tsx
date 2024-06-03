import React, {useEffect, useState} from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/footer/FooterComponent";
import {MyContext} from "../context/ContextProvider";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {commentService, postService, userService} from "../services/jph.api.services";


const MainLayout = () => {
    const [users,setUsers] = useState<IUserModel[]>([]);
    const [posts,setPosts] = useState<IPostModel[]>([]);
    const [comments,setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(value =>setUsers(value.data));
        postService.getPosts().then(value =>setPosts(value.data));
        commentService.getComments().then(value =>setComments(value.data));
    }, []);
    return (
        <div>
            <MyContext.Provider value={
                {
                    userStore:{
                        allUsers:users
                    },
                    postStore:{
                        allPosts:posts
                    },
                    commentStore:
                        {allComments:comments
                        }
                }}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
            </MyContext.Provider>
        </div>
    );
};

export default MainLayout;