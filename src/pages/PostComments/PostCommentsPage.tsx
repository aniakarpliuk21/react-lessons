import React, {useEffect, useState} from 'react';
import PostCommentsComponent from "./PostCommentsComponent";
import {useParams} from "react-router-dom";
import {IPostCommentModel} from "../../models/IPostCommentModel";
import {postServise} from "../../services/post.services";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [postComments,setPostComments]
        = useState<IPostCommentModel[]>([])
    useEffect(() => {
        if(id){
postServise.getAllCommentsOfPost(id).then(value => setPostComments(value.data))
        }
    }, [id]);
    return (
        <div>
            <PostCommentsComponent postComments={postComments}/>
        </div>
    );
};

export default PostCommentsPage;