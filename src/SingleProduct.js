import React, { useEffect, useState } from 'react';
import WooCommerceService from './services/WooCommerceService';

const SingleProduct = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    WooCommerceService.getProduct(productId)
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    
   <div className="container mx-auto mt-8 p-4">
    <SingleProduct productId={product.id} />
      <h2>{product.name}</h2>
      <div className="flex">
        <div className="w-1/2">
          <img src={product.images[0].src} alt={product.name} className="max-w-full" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg font-bold mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
