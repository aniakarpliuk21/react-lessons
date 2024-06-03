import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './User.css'
interface IProps{user:IUserModel}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div className={'user'}>
            <h3>{user.id} {user.name}</h3>
            <p>email - {user.email}</p>
            <p>username - {user.username}</p>

        </div>
    );
};

export default UserComponent;