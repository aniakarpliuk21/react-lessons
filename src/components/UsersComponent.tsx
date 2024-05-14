import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {getAllUsers} from "../services/dummy.api.sevices";
import UserComponent from "./UserComponent";
type IProps = {lift:(postId:number) => void}
const UsersComponent:FC<IProps> = ({lift}) => {
    const [users,setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data:{users}})=>setUsers(users))
    }, []);
    return (
        <div>
            {
                users.map((value)=><UserComponent key={value.id} lift={lift} item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;