import React from 'react';
import Post from '../components/Post';
import { useParams } from 'react-router-dom';

function PostPasge(props) {
    const {id} = useParams();
    const postId = Number(id);
    return (
        <Post postId={postId} />
    );
}
export default PostPasge;
