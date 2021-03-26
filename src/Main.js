import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/posts';
const Main = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(url)
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
        return () => {

        }
    }, []);
    return (
        <div className="row">
            <div className="col-3 text-center">
                Left
            </div>
            <div className="col-6">
                {posts.splice(0, 10).map(value =>
                    <div className="p-3">
                        <Link className="font-weight-bold" to={`/post/${value.id}`}>{value.title}</Link>
                        <p className="text-muted">
                            {value.body}
                        </p>
                        <a style={{color: "#39912E"}} href={`${url}/${value.id}`}>{`${url}/${value.id}`}</a>
                    </div>)}
            </div>
            <div className="col-3 text-center">
                Right
            </div>
        </div>
    )
}

export default Main
