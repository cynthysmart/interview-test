import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router';
const url = 'https://jsonplaceholder.typicode.com/posts';
const Posts = () => {
    const { id } = useParams();
    console.log("🚀 ~ file: Posts.js ~ line 7 ~ Posts ~ id", id)
    const [post, setPost] = useState({});
    console.log("🚀 ~ file: Posts.js ~ line 9 ~ Posts ~ post", post)

    useEffect(() => {
        axios
            .get(`${url}/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.error(err));
        return () => {

        }
    }, [id]);
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                HI
            </div>
        </div>
    )
}

export default Posts
