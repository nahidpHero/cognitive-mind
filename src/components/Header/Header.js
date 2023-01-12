import React from 'react';
import background from '../../assets/background.png'
import logo from '../../assets/Cognitive Mind Logo-01.png'

const Header = () => {
    return (
        <div>
        <div className="hero">
            <img src={background} alt="" />
      <div className="hero-content text-center">
        <div className="">
         <img className='logo-style' src={logo} alt="" />
         <h1 className='text-5xl text-blue-50 font-semibold'>Beyond your thinking</h1>
        </div>
      </div>
    </div>
            </div>
    );
};

export default Header;