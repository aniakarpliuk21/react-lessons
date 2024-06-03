import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import './Cars.css'
interface IProps{
    cars:ICarWithAuthModel[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div className={'cars'}>
            {
                cars.map((car => <CarComponent key={car.id} car={car}/>))
            }
        </div>
    );
};

export default CarsComponent;