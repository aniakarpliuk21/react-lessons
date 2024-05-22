import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {userServise} from "../../services/jsph.Services";
import UserComponent from "./UserComponent";

const UsersComponent:FC = () => {
    const [users,setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userServise.getAllUsers().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;