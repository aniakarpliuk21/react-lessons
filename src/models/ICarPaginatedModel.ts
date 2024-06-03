import {ICarWithAuthModel} from "./ICarWithAuthModel";
import {IPaginatedModel} from "./IPaginatedModel";

export interface ICarPaginatedModel {
    total_items:number,
    total_pages:number,
    prev:IPaginatedModel | null,
    next:IPaginatedModel | null,
    items:ICarWithAuthModel[]
}