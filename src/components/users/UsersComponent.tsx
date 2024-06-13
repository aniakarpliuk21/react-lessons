import React from 'react';
import {useAppSelector} from "../../redux/Store";
import UserComponent from "./UserComponent";
import './User.css'

const UsersComponent = () => {
    let {users,isLoaded} = useAppSelector(state => state.userSlice)
    return (
        <div className={'users'}>
            {
                isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>)
                    :
                    <h3>Loading...</h3>
            }
        </div>
    );
};

export default UsersComponent;