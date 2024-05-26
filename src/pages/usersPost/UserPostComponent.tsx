import React, {FC} from 'react';
import {IUserPostModel} from "../../models/IUserPostModel";
interface IProps{
    userPost:IUserPostModel
}

const UserPostComponent:FC<IProps> = ({userPost}) => {
    return (
        <div>
            <h3>{userPost.id}.User Id - {userPost.userId},{userPost.title}</h3>
            <p>{userPost.body}</p>
        </div>
    );
};

export default UserPostComponent;