import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
interface IProps{
    car:ICarWithAuthModel
}
const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <h2>{car.id}{car.brand}</h2>
            <p>Year-{car.year}</p>
            <p>Price-{car.price}$</p>
        </div>
    );
};

export default CarComponent;