import React, {FC, useEffect, useState} from 'react';
import {authService, carService} from "../../services/API.Services";
import CarsComponent from "./CarsComponent";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";

const CarsPage:FC = () => {
    const navigate = useNavigate();
    const [query,setQuery]=useSearchParams();
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items:[],
        next:null,
        prev:null,
        total_items:0,
        total_pages:0
    })
    useEffect(() => {
        const getCarsData = async () =>{
           try {
               const response = await carService.getCars(query.get('page') || '1');
               if(response){
                   setCarsPaginatedObject(response)
               }
           }catch (e) {
               const axiosError =  e as AxiosError
               if(axiosError && axiosError?.response?.status === 401){
                   try{
                       await authService.refresh()
                   }catch (e) {
                       return navigate('/')

                   }
                   const response = await carService.getCars(query.get('page') || '1')
                   if(response){
                       setCarsPaginatedObject(response);
                   }
               }
           }
        }
        getCarsData();
    }, [navigate,query]);
    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;