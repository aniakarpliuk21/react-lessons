import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersComponent from "../pages/users/UsersComponent";
import PostsComponent from "../pages/posts/PostsComponent";
import CommentsComponent from "../pages/comments/CommentsComponent";
import DefaultPage from "../pages/default/DefaultPage";
import ErrorLayout from "../layouts/error/ErrorLayout";
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
                element:<UsersComponent/>
            },
            {
                path:'posts',
                element:<PostsComponent/>
            },
            {
                path:'comments',
                element:<CommentsComponent/>
            }
        ]
    }

]);