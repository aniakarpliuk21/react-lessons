import React, {useEffect, useMemo, useState} from 'react';
import PostCommentsComponent from "../components/postComments/PostCommentsComponent";
import {PostCommentsType} from "../models/PostCommentsType";
import {useStore} from "../store/Store";

const PostCommentsPage = () => {
    const {postStore:{allPosts},commentStore:{allComments}} = useStore();
    const [commentsOfPostState,setCommentsOfPostState] = useState<PostCommentsType[]>([])
    const commentsOfPost = useMemo(() => {
        return allPosts.map(post => {
            return{...post,comments:allComments.filter(comment => comment.postId===post.id)}
        })
    },[allComments,allPosts])
    useEffect(() => {
        setCommentsOfPostState(commentsOfPost)
    }, [commentsOfPost]);
    return (
        <div>
            <PostCommentsComponent postsComments={commentsOfPostState} />
        </div>
    );
};

export default PostCommentsPage;