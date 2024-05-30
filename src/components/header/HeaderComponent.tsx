import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'
const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <span><NavLink to={'/'}>Login page</NavLink></span>
            <span><NavLink to={'cars'}>Cars</NavLink></span>
        </div>
    );
};

export default HeaderComponent;