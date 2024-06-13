import React, {FC} from 'react';
import {UserPostsType} from "../../models/UserPostsType";
interface IProps{
    userPost:UserPostsType
}
const UserPostComponent:FC<IProps> = ({userPost}) => {
    return (
        <div>
            <h4>{userPost.id} {userPost.name}</h4>
            <ul>
                {
                    userPost.posts.map((post) => (<li key={post.id}>{post.title}</li>))
                }
            </ul>
        </div>
    );
};

export default UserPostComponent;