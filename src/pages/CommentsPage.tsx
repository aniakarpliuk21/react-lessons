import React, {useEffect} from 'react';
import CommentsComponent from "../components/comments/CommentsComponent";
import {useAppDispatch} from "../redux/Store";
import {commentAction} from "../redux/slices/CommentSlice";

const CommentsPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch((commentAction.loadComments()))
    }, []);
    return (
        <div>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;