import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenOptainPairModel} from "../models/ITokenOptainPairModel";
import {retriveLocalStorageData} from "./helpers/Helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers:{}
})
axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== 'auth/refresh')){
        const iTokenObtainPair = retriveLocalStorageData<ITokenOptainPairModel>('tokenPair')
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access)
    }
    return request;
})
const authService = {
    authentication: async (authData:AuthDataModel): Promise<boolean> => {
          const response =  await axiosInstance.post<ITokenOptainPairModel>('/auth', authData);
           localStorage.setItem('tokenPair', JSON.stringify(response.data))
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async ()=>{
        const refreshToken = retriveLocalStorageData<ITokenOptainPairModel>('tokenPair').refresh
         const response = await axiosInstance.post<ITokenOptainPairModel>('/auth/refresh', {refresh:refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}

const carService = {
    getCars : async (page:string = '1'):Promise<ICarPaginatedModel | undefined > => {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params:{page:page}});
            return response.data;
    }}
export{
    authService,
    carService
}