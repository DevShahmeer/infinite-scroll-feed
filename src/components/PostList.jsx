import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
            setPosts((prevPosts) => [...prevPosts, ...response.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchPosts();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="post-list">
        {posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
        ))}
        </div>
    );
    };

export default PostList;
