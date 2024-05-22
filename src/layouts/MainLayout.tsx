import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import {Outlet} from "react-router-dom";
import './MainLayout.css'
const MainLayout = () => {
    return (
        <div className={'main'}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;