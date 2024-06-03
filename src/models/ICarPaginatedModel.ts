import {ICarWithAuthModel} from "./ICarWithAuthModel";

export interface ICarPaginatedModel {
    total_items:number,
    total_pages:number,
    prev:string | null,
    next:string | null,
    items:ICarWithAuthModel[]
}