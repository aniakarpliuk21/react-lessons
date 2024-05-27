import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {userServise} from "../../services/user.services";
import {Link, NavLink, useNavigate} from "react-router-dom";
interface IProps {
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {

//     function onClickHandler() {
// userServise.getPostFromUser(user.id)
//     .then(({data})=>console.log(data))
//     }

    return (
        <div>
            <h3>{user.id}.Username-{user.username},name-{user.name}</h3>
            <p>email-{user.email}</p>
            <Link to={user.id.toString()} state={{user}}>details</Link>
        </div>
    );
};

export default UserComponent;