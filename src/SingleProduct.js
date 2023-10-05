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
    <div>
     <SingleProduct productId={product.id} />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.images[0].src} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProduct;
