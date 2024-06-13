import React, {FC} from 'react';
import {UserPostsType} from "../../models/UserPostsType";
import UserPostComponent from "./UserPostComponent";
interface IProps{
    userPosts:UserPostsType[]
}
const UserPostsComponent:FC<IProps> = ({userPosts}) => {
    return (
        <div>
            {
                userPosts.map(userPost =><UserPostComponent key={userPost.id} userPost={userPost}/>)
            }
        </div>
    );
};

export default UserPostsComponent;