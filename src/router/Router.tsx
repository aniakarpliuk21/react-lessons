import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage";
import ErrorLayout from "../layouts/error/ErrorLayout";
import DefaultPage from "../pages/default/DefaultPage";
const routes = [{
    path:'',
    element:<MainLayout/>,
    errorElement:<ErrorLayout/>,
    children:[
        {element:<DefaultPage/>,index:true},
        {path:'users',element:<UsersPage/>},
        {path:'posts',element:<PostsPage/>},
        {path:'userPosts',element:<UserPostsPage/>},
        {path:'comments',element:<CommentsPage/>},
        {path:'postComments',element:<PostCommentsPage/>}
    ]
}]
export const router = createBrowserRouter(routes);