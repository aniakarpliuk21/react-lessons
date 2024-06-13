import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/Store";
import {postAction} from "../redux/slices/PostSlice";
import {commentAction} from "../redux/slices/CommentSlice";
import PostCommentsComponent from "../components/postComments/PostCommentsComponent";

const PostCommentsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postSlice.posts);
    const comments = useAppSelector(state => state.commentSlice.comments);
    useEffect(() => {
        dispatch(postAction.loadPosts());
        dispatch(commentAction.loadComments());
    }, [dispatch]);

    const commentsOfPost = useMemo(() => {
        return posts.map(post => ({
            ...post,
            comments: comments.filter(comment => comment.postId === post.id)
        }));
    }, [posts,comments]);
    return (
        <div>
            <PostCommentsComponent postComments={commentsOfPost}/>
            </div>
    );
};

export default PostCommentsPage;