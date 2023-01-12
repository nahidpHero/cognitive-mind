import React from 'react';
import background from '../../assets/90445.jpg'
const ContuctUs = () => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
 
    

      
        event.target.reset();
      };
      
    return (
        <div 
        style={{ backgroundImage: `url(${background})` }}
        className="pb-10"
        
        >
      <h1 className=" text-5xl text-white p-5  text-center">Join with us..</h1>
      <form
       
        className="flex flex-col  p-5 mx-auto  border rounded-md shadow-2xl lg:w-1/2 border-spacing-1"
        onSubmit={handleSubmit}

      >
        <input
          type="text"
          className="w-full px-5  my-5 text-black border-none shadow-md input "
          name="user_name"
          placeholder="Full Name"
        />
        <input
          className="w-full px-5 my-5 text-black input"
          type="email"
          name="user_email"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="w-full px-5 my-5 text-black border-none shadow-md input bg-none"
          name="user_subject"
          placeholder="Subject"
        />
        <textarea
          className="w-full h-32 p-5 my-5 text-black input"
          name="message"
          placeholder="Write your email..."
        />

        <input
          className="w-20 px-5 mx-auto my-5 btn btn-accent"
          type="submit"
        />
      </form>
    </div>
    );
};

export default ContuctUs;