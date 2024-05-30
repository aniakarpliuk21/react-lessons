import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
interface IProps{
    items:ICarWithAuthModel[]
}

const CarsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map((item => <CarComponent key={item.id} car={item}/>))
            }
        </div>
    );
};

export default CarsComponent;