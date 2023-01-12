import React from 'react';
import img1 from '../../assets/blog-1.PNG'
import img2 from '../../assets/blog-2.PNG'
import img3 from '../../assets/blog-3.PNG'

const Blog = () => {
    return (
        <div className='grid grid-cols-3 ml-20 mb-20'>
            <div className='text-xl text-white shadow-xl'>
          <a href="#">  <img className='w-80' src={img1} alt="" /></a>
          <p>Google Ai, THE FUTURE</p>
            </div>
            <div className='text-xl text-white shadow-xl'>
            <img className='w-80' src={img2} alt="" />
            <p>Go through to Cognitive AI</p>
            </div>
            <div className='text-xl text-white shadow-xl'>
            <img className='w-80' src={img3} alt="" />
            <p>AI- Interview Question</p>
            </div>
            
        </div>
    );
};

export default Blog;