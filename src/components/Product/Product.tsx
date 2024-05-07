import React, {FC} from 'react';
export interface IProductProps {
    id:number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[]}
export type IProductTypeProps = IProductProps & {children?:React.ReactNode}
const Product: FC<IProductTypeProps> = ({id, title, description, price,
                                            discountPercentage, rating,
                                            stock, brand, category, thumbnail,
                                            images
                                            }) => {
    return (
        <div>
            <h2>{id}.{title}price{price}</h2>
            <h3>{description}</h3>
            <p>
                discountPercentage-{discountPercentage},
                rating-{rating},
                stock-{stock},
                brand-{brand},
                category-{category}
            </p>
            <img src={thumbnail} alt={title}/>
            <ul>
                {
                 images?.map((image,index) => <li key={index}>{<img src={image} alt={''}/>}</li>)
                }
            </ul>
        </div>
    );
};

export default Product;