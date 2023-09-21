import React, { useState, useEffect } from 'react';
import WordPressService from './services/WordPressService';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams(); // Use useParams to get the id parameter
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await WordPressService.getPostById(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{post.title.rendered}</h1>
      {post._embedded && post._embedded['wp:featuredmedia'] && (
        <img
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          className="w-full h-64 object-cover mb-4"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default SinglePost;
