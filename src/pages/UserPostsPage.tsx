import React, {useEffect, useMemo, useState} from 'react';
import UserPostsComponent from "../components/userPosts/UserPostsComponent";
import {useStore} from "../store/Store";
import {UserPostsType} from "../models/UserPostsType";

const UserPostsPage = () => {
    const {userStore:{allUsers},postStore:{allPosts}} = useStore();
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