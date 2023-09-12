import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/posts';

function Post({postId}) {
    const { data, loading, error } = useSelector(state => state.posts.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(postId));
    },[dispatch, postId])
    if(loading) return <div>로딩중~_~</div>
    if(error) return <div>에러!!!!! -_-</div>
    if(!data) return null
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}

export default Post;