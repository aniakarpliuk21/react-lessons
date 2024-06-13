import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './User.css'
import {useNavigate} from "react-router-dom";
interface IProps{
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    let navigate = useNavigate()
    return (
        <div className={'user'}>
            <h3>{user.id} {user.name}</h3>
            <p>email - {user.email}</p>
            <p>username - {user.username}</p>
            <button onClick={() => {
                navigate(user.id.toString())
            }}>Details
            </button>
        </div>
    );
};

export default UserComponent;