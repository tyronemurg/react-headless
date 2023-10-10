import React, { useState, useEffect } from 'react';
import WordPressService from './services/WordPressService';
import { Link } from 'react-router-dom';

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await WordPressService.getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-4">WordPress Posts</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map(post => (
        <div key={post.id} className="border border-gray-300 p-4 shadow-lg rounded-lg m-4 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">{post.title.rendered}</h2>
          {post._embedded && post._embedded['wp:featuredmedia'] && (
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className="w-full h-32 object-cover mb-4"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <p className="mt-4">
            <Link to={`/post/${post.id}`} className="text-blue-600">Read more</Link>
          </p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default WordPressPosts;
