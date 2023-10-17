import React, { useState, useEffect } from 'react';
import WordPressService from './services/WordPressService';
import { Link } from 'react-router-dom';

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);
  const [hoveredPost, setHoveredPost] = useState(null);

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
          <div
            key={post.id}
            className="bg-white p-4 shadow-lg rounded-lg m-4 relative transform hover:-rotate-0 hover:rotate-0 hover:-translate-y-5 hover:-transform-x-1 hover:shadow-xl transition duration-600"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className={`featured-image ${hoveredPost === post.id ? 'hidden' : ''}`}>
              {post._embedded && post._embedded['wp:featuredmedia'] && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
              )}
            </div>
            <div className={`animated-svg ${hoveredPost === post.id ? 'block' : 'hidden'}`}>
              <img src="https://media.giphy.com/media/TQY28JxzAkTp1Y8i6A/giphy.gif" alt="mk"/>
            </div>
            <h2 className="text-xl font-bold mb-2">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <p className="mt-4">
              <Link to={`/post/${post.id}`} className="text-blue-600">
                Read more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordPressPosts;
