import React from 'react';
import './Event.css'
const Event = () => {
    return (
      <div>
        <p className='text-5xl mt-20 mb-10 font-bold text-center'>Event</p>
        <div className='ml-36 pb-10'>
         <div className="hero border-2 event-style">
        <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div >
      <h1 className="text-3xl  font-bold "></h1>
      <p className="py-6 text-3xl">Welcome to Cognitive Mind. We conduct cutting-edge research in artificial intelligence, machine learning, deep learning and data mining as well as applications in computer vision, natural language processing, signal processing, bioinformatics, cyber security, and related areas. We also work to produce real-life applications from the research funding. We care and take data extremely. As everyone in AI research agnostics about how the state-of-the-art in AI will change over the forward days, We are ardently committed to ensuring that general-purpose AI enriches all of humanity. Cognitive Mind Lab is passionate about learning AI for the new generation so pupils are cordially welcome to join us..</p>
      <div className='justify-end text-accent'>
      <button className="btn  btn-primary">See More</button>
      </div>
    </div>
  </div>
</div>
       </div>
  
      </div>
         );
};

export default Event;