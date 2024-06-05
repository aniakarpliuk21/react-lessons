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
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);
    const [favoritePostState, setFavoritePostState] = useState<IPostModel | null>(null);
    useEffect(() => {
        userService.getUsers().then(value =>setUsers(value.data));
        postService.getPosts().then(value =>setPosts(value.data));
        commentService.getComments().then(value =>setComments(value.data));
    }, []);

    const liftUser = (objUser:IUserModel) => {setFavoriteUserState(objUser)}
    const liftPost = (objPost:IPostModel) => {setFavoritePostState(objPost)}
    return (
        <div>
            <MyContext.Provider value={
                {
                    userStore:{
                        allUsers:users,
                        setFavoriteUser:(objUser:IUserModel)=>{liftUser(objUser)}
                    },
                    postStore:{
                        allPosts:posts,
                        setFavoritePost:(objPost:IPostModel)=>{liftPost(objPost)}
                    },
                    commentStore:
                        {allComments:comments
                        }
                }}>
            <HeaderComponent favoriteUser={favoriteUserState} favoritePost={favoritePostState}/>
            <Outlet/>
            <FooterComponent/>
            </MyContext.Provider>



        </div>
    );
};

export default MainLayout;