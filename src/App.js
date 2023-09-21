import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statement
import WordPressPosts from './WordPressPosts';
import SinglePost from './SinglePost';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<WordPressPosts />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
