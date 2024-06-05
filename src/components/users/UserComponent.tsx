import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './User.css'
import {useStore} from "../../store/Store";
interface IProps{user:IUserModel}
const UserComponent:FC<IProps> = ({user}) => {
    const {userStore:{setFavoriteUser}} = useStore();
    return (
        <div className={'user'}>
            <h3>{user.id} {user.name}</h3>
            <p>email - {user.email}</p>
            <p>username - {user.username}</p>
            <button onClick ={ ()=>{setFavoriteUser(user)}}>Favorite user</button>
        </div>
    );
};

export default UserComponent;