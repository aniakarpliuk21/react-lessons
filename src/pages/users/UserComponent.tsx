import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
interface IProps {
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <h3>{user.id}.Username-{user.username},name-{user.name}</h3>
            <p>email-{user.email}</p>
        </div>
    );
};

export default UserComponent;