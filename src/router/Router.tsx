import {createBrowserRouter, RouteObject} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import DefaultPage from "../pages/default/DefaultPage";
import CommentPage from "../pages/CommentPage";
import UserPostsPage from "../pages/UserPostsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

const routes:RouteObject[]=[
    {
        path:'',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
    children:[
        {element:<DefaultPage/>,index:true},
        {path:'users',element:<UsersPage/>},
        {path:'posts',element:<PostsPage/>},
        {path:'comments',element:<CommentsPage/>},
        {path:'userPosts',element:<UserPostsPage/>},
        {path:'postComments',element:<PostCommentsPage/>},
        {path:'users/:id',element:<UserPage/>},
        {path:'posts/:id',element:<PostPage/>},
        {path:'comments/:id',element:<CommentPage/>}
    ]}
]
export const router = createBrowserRouter(routes)