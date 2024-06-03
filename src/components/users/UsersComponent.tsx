import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import UserComponent from "./UserComponent";
import './User.css'

const UsersComponent = () => {
    const {userStore: {allUsers}}=useContextProvider();
    return (
        <div className={'users'}>
            {
                allUsers.map(user => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};

export default UsersComponent;