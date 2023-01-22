import React from 'react';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

const RunningProjects = () => {
    const projects = [
        {
          title: "sexual harassment detection",
          url: "https://ieeexplore.ieee.org/document/9689891",
          image: `${img1}`,
         
        },
        {
            title: "Human Fall Detection",
            url: "https://ieeexplore.ieee.org/abstract/document/9087514",
            image: `${img2}`,
        },
        {
            title: "Bangla License Plate Recognition",
            url: "https://ieeexplore.ieee.org/abstract/document/8554668 ",
            image: `${img3}`,
        },
      ];
    return (
      <div className=' mx-auto mt-16   text-center'>
          <p className='text-5xl text-bold mb-10'>Running Project</p>
        <div className="card w-96 grid lg:grid-cols-3 md:grid-cols-2  lg:gap-10 mx-auto justify-center  bg-base-100 shadow-xl">
        {
          projects.map((project=>(
            <a 
            href={project.url}
            className="overflow-hidden transition duration-100 rounded  hover:-translate-y-2"
            >
              <figure><img className='overflow-y-auto' src={project.image} alt="img" /></figure>
          <div className="card-body overflow-y-auto">
          <h2 className="card-title">
          {
            project.title
          }
        </h2>
        
      </div>
            </a>
          )))
        }
      </div>
      </div>
            );
};

export default RunningProjects;