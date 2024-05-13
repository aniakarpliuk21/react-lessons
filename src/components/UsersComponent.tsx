import React, {FC, useEffect, useState} from 'react';
import UserComponent from "./UserComponent";
import {IUserModel} from "../models/IUserModel";
import {getAllUsers} from "../services/jpg.api.services";

interface IProps{
    lift: (postId:number)=> void
}

const UsersComponent:FC<IProps> = ({lift}) => {
    const [users,setUsers]=useState<IUserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data})=>{
            setUsers(data)
        })
    }, []);
    return (
        <div>
            {
                users.map((user)=>(<UserComponent key={user.id} lift={lift} item={user}/>))
            }
        </div>
    );
};

export default UsersComponent;