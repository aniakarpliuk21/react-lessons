import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
type IProps = {item:IUserModel} & {lift:(userId:number)=>void}
const UserComponent:FC<IProps> = ({item,lift}) => {
    const onClickHandler = () => {
        lift(item.id);
    };
    return (
        <div>
            {item.id}{item.firstName}{item.lastName}{item.maidenName}
            age-{item.age}
            <img src={item.image} alt={item.firstName}/>
            <button onClick={onClickHandler}>Posts</button>
        </div>
    );
};

export default UserComponent;