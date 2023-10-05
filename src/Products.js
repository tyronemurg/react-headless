import React, { useEffect, useState } from 'react';
import WooCommerceService from './services/WooCommerceService';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    WooCommerceService.getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
    <h2  className="text-2xl font-bold mb-4">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id}  className="border border-gray-300 p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p>Price: {product.price}</p>
          <img src={product.images[0].src} alt={product.name} className="w-full h-32 object-cover mb-4"/>
          <Link to={`/product/${product.id}`} className="text-blue-600">Read more</Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Products;