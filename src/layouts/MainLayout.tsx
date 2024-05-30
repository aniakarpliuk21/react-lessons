import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import './MainLayout.css'
const MainLayout = () => {
    return (
        <div className={'main'}>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;