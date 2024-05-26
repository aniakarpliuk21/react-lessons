import React, {FC} from 'react';
import UserPostComponent from "./UserPostComponent";
import {IUserPostModel} from "../../models/IUserPostModel";
interface IProps {
    userPosts:IUserPostModel[]
}
const UserPostsComponent:FC<IProps> = ({userPosts}) => {
    return (
        <div>
            {
                userPosts.map(userPost => <UserPostComponent key={userPost.id} userPost={userPost}/>)
            }
        </div>
    );
};

export default UserPostsComponent;