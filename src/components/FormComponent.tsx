import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {userValidator} from "../validators/User.Validator";

import {joiResolver} from "@hookform/resolvers/joi";
interface IFormProps {
    title:string,
    body:string,
    userId:number,
}
 export const FormComponent: FC = () => {
    let {register,
        handleSubmit,
         formState:{errors}} = useForm<IFormProps>({
        mode:"onSubmit",
        resolver:joiResolver(userValidator)
    })

    const save = (formV:IFormProps) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title:formV.title,
                body:formV.body,
                userId:formV.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <input type="number" {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;