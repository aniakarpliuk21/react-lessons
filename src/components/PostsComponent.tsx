import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostComponent from "./PostComponent";
type IProps ={posts:IPostModel[]} & {children?:React.ReactNode}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => (<PostComponent post={post} key={post.id}/>))
            }
        </div>
    );
};

export default PostsComponent;