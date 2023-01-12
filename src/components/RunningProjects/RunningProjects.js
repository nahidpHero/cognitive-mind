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
        <div id="projects" className="mb-36 ml-7 mr-7 mx-auto ">
              <h1 className="my-10 text-5xl text-center text-white text-blod">Running Reserse Projects</h1>
              <div className="grid grid-cols-1 lg:ml-44 justify-center text-center gap-10 card md:grid-cols-2  lg:grid-cols-3">
                {projects.map((project) => (
                  <a
                    href={project.url}
                    key={project.title}
                    className="overflow-hidden text-white transition duration-100 rounded shadow-sm hover:-translate-y-2"
                  >
                    <div className="overflow-y-auto">
                      <img
                        src={project.image}
                        className="object-cover w-full"
                        alt=""
                      />
                    </div>
                    <div className="p-5 border bg-slate-200 opacity-70 ">
                     
                      <a
                        href="/"
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3  font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        {project.title}
                      </a>
                     
                     
                    </div>
                  </a>
                ))}
              </div>
            </div>
    );
};

export default RunningProjects;