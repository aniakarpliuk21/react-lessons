import React, {FC, useEffect, useState} from 'react';
import {carService} from "../../services/API.Services";
import CarsComponent from "./CarsComponent";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";

const CarsPage:FC = () => {
    const [cars, setCars] = useState<ICarPaginatedModel>({
        items:[],
        next:null,
        prev:null,
        total_items:0,
        total_pages:0
    })
    useEffect(() => {
        carService.getCars().then((value) => {
            if(value){
                setCars(value)}}
        )
    }, []);
    return (
        <div>
            <CarsComponent items={cars.items}/>
        </div>
    );
};

export default CarsPage;