import React from 'react';
import About from '../About/About';
import Event from '../Event/Event';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className='mx-0  bg-neutral'>
            <Header></Header>
            <h3 class="text-center text-3xl mt-12">&quot;Machine intelligence is the last invention that humanity will ever need to make &quot;</h3>
            <h3 class=" text-center text-xl">-Nick Bostrom</h3>  
             <About></About>
            <Projects></Projects>
            <Team></Team>
            <Event></Event>
        </div>
    );
};

export default Home;