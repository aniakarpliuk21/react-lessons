import React from 'react';
import UserComponent from "./UserComponent";
import './User.css'
import {useStore} from "../../store/Store";

const UsersComponent = () => {
   const {userStore:{allUsers}} = useStore();
    return (
        <div className={'users'}>
            {
                allUsers.map(user => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};

export default UsersComponent;