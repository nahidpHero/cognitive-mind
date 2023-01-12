import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
              <>
        <nav className="sticky top-0 flex flex-col bg-current items-center justify-center pl-3 py-6 sm:flex-row md:justify-between md:items-center">
       <div>
         <Link
           to="/"
           className="text-xl font-bold md:text-2xl text-accent hover:text-gray-300"
         >
         Cognitive Mind
         </Link>
       </div>
       <div className="flex items-center mt-2 -mx-2 sm:mt-0 pr-2">
         <ul className="flex flex-wrap font-bold justify-center text-white gap-3 px-1  md:gap-5">
         <li>
     <Link to="/home">Home</Link>
    </li>
    <li>
    <a href="#about">About Us</a>
   </li>
   <li>
    <a href="#projects">Projects</a>
   </li>
   <li>
   <a href="#Team">Team</a>
   </li>
   <li>
  <a href="#blogs">Blogs</a>
</li>
<li>
  <a href="#events">Events</a>
</li>
<li>
<Link to="/contactus">Contact Us</Link>
</li>
         </ul>
       </div>
     </nav>
           
       </>
        </div>
    );
};

export default Navbar;