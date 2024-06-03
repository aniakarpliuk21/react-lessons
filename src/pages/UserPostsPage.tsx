import React, {useEffect, useMemo, useState} from 'react';
import UserPostsComponent from "../components/userPosts/UserPostsComponent";
import {useContextProvider} from "../context/ContextProvider";
import {UserPostsType} from "../models/UserPostsType";

const UserPostsPage = () => {
    const {userStore:{allUsers},postStore:{allPosts}} = useContextProvider();
    const [postsOfUserState,setPostsOfUserState] = useState<UserPostsType[]>([])
    const postsOfUser = useMemo(() => {
        return allUsers.map(user => {
            return{...user,posts:allPosts.filter(post=>post.userId===user.id)}
        })
    },[allUsers,allPosts])
    useEffect(() =>{
        setPostsOfUserState(postsOfUser)
    },[postsOfUser])
    return (
        <div>
            <UserPostsComponent userPosts={postsOfUserState}/>
        </div>
    );
};

export default UserPostsPage;