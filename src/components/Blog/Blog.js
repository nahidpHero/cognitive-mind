import React from 'react';
import img1 from '../../assets/blog-1.PNG'
import img2 from '../../assets/blog-2.PNG'
import img3 from '../../assets/blog-3.PNG'

const Blog = () => {
    return (
        <div className=''>
                <div className='text-center text-5xl font-bold mt-10 mb-10'>
                    <h1>Blogs</h1>
                </div>
            <div className='grid lg:grid-cols-3  lg:ml-48 mx-auto justify-center'>
            <div className='text-xl font-bold w-80 mb-10'>
          <a href="#">  <img className='' src={img1} alt="" /></a>
          <p className=''>Google Ai, THE FUTURE</p>
            </div>
            <div className='text-xl font-bold w-80 mb-10'>
           <a href=""> <img className='' src={img2} alt="" /></a>
            <p>Go through to Cognitive AI</p>
            </div>
            <div className='text-xl font-bold w-80 mb-10'>
            <a href=""><img className='' src={img3} alt="" /></a>
            <p>AI- Interview Question</p>
            </div>
            
        </div>
        </div>
    );
};

export default Blog;