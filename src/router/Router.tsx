import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import AuthPage from "../pages/auth/AuthPage";
import CarsPage from "../pages/cars/CarsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
            {
                index: true,
                element:<AuthPage/>},
            {
                path:'cars',
                element:<CarsPage/>
            }
        ]
    }
]);