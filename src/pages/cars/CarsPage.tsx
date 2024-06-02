import React, {FC, useEffect, useState} from 'react';
import {carService} from "../../services/API.Services";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import CarsComponent from "./CarsComponent";

const CarsPage:FC = () => {
    const [items, setItems] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
        carService.getCars().then((data) => {
            if(items){setItems(items)}}
        )
    }, [items]);
    return (
        <div>
            <CarsComponent items={items}/>
        </div>
    );
};

export default CarsPage;