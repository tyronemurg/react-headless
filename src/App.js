import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WordPressPosts from './WordPressPosts';
import SinglePost from './SinglePost';
import SingleProduct from './SingleProduct';
import Products from './Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route exact path="/" element={<WordPressPosts />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
