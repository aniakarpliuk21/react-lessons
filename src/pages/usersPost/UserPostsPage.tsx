import React, {FC, useEffect, useState} from 'react';
import UserPostsComponent from "./UserPostsComponent";
import {useParams} from "react-router-dom";
import {userServise} from "../../services/user.services";
import {IUserPostModel} from "../../models/IUserPostModel";

const UserPostsPage:FC = () => {
    const {id} = useParams();
    const [userPosts,setUserPosts] = useState<IUserPostModel[]>([]);
    useEffect(() => {
        if(id){
            userServise.getPostOfUser(id).then(value=>setUserPosts(value.data))
        }
    }, [id]);
    return (
        <div>
            <UserPostsComponent userPosts={userPosts}/>
        </div>
    );
};

export default UserPostsPage;