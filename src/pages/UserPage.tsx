import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/Store";
import {userAction} from "../redux/slices/UserSlice";
const UserPage = () => {
    let {id}= useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice)
    useEffect(() => {
        dispatch(userAction.loadUserById(id))
    }, [id]);
    return (
        <div>
            {
                user && <div className={'user'}>
                    <h3>{user.id} {user.name}</h3>
                    <p>email - {user.email}</p>
                    <p>username - {user.username}</p>
                </div>
            }
        </div>
    );
};

export default UserPage;