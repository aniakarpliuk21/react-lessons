import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
type IProps = {item:IUserModel} & {lift:(postId:number)=> void}
const UserComponent:FC<IProps> = ({item,lift}) => {

    const onclickHandler = () => {
     lift(item.id)
    };
    return (
        <div>
            {item.id}{item.name}
            {item.email}{item.username}
            <button onClick={onclickHandler}>posts</button>
        </div>
    );
};

export default UserComponent;