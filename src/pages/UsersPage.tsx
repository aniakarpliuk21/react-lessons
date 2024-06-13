import React, {useEffect} from 'react';
import UsersComponent from "../components/users/UsersComponent";
import {useAppDispatch} from "../redux/Store";
import {userAction} from "../redux/slices/UserSlice";

const UsersPage = () => {
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);
    return (
        <div>
           <UsersComponent/>
        </div>
    );
};

export default UsersPage;