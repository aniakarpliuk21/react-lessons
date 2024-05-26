import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DefaultPage from "../pages/default/DefaultPage";
import ErrorLayout from "../layouts/error/ErrorLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import UserPostsPage from "../pages/usersPost/UserPostsPage";
import PostCommentsPage from "../pages/PostComments/PostCommentsPage";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
            {
                element:<DefaultPage/>,
                index:true
            },
            {
                path:'users',
                element:<UsersPage/>
            },
            {
                path:'users/:id',
                element:<UserPostsPage/>
            },
            {
                path:'posts',
                element:<PostsPage/>
            },
            {
                path:'posts/:id',
                element:<PostCommentsPage/>
            },
            {
                path:'comments',
                element:<CommentsPage/>
            }
        ]
    }

]);