import React, {FC} from 'react';
import {IPaginatedModel} from "../../models/IPaginatedModel";
import {useSearchParams} from "react-router-dom";
import './pagination.css'
interface IProps{
    prev:IPaginatedModel | null;
    next:IPaginatedModel | null
}
const PaginationComponent:FC<IProps> = ({prev,next}) => {
    const [query,setQuery]=useSearchParams({page:'1'})
    const changePage = (action:string) => {
        switch (action){
            case 'prev':
                setQuery({...prev})
                break;
            case 'next':
                setQuery({...next})
                break;
        }
    }
    return (
        <div>
            <button className={'prev'} onClick={() =>{
                changePage('prev')
            }}
                    disabled={!prev}
            >prev</button>
            <button className={'next'} onClick={() =>{
                changePage('next')
            }}
            disabled={!next}
            >next</button>
        </div>
    );
};

export default PaginationComponent;