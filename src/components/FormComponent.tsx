import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {postValidator} from "../validators/Post.Validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {IPostModel} from "../models/IPostModel";
import {postService} from "../services/json.api.services";
import {IFormModel} from "../models/IFormModel";
 export const FormComponent: FC = () => {
    let {register,
        handleSubmit,
         formState:{errors}} = useForm<IFormModel>({
        mode:"all",
        resolver:joiResolver(postValidator)
    })
const [post,setPost] = useState<IPostModel | null>(null)
    const save = (post : IFormModel) => {
        postService.savePost(post).then((value) => setPost(value.data));
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
            <h2>{post?.id}{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default FormComponent;