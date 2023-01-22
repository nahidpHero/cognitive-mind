import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Dataset from '../Dataset/Dataset';
import Event from '../Event/Event';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import RunningProjects from '../RunningProjects/RunningProjects';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className='mx-0'>
            <Header></Header>
            <h3 class="text-center font-semibold text-3xl mt-12">&quot;Machine intelligence is the last invention that humanity will ever need to make &quot;</h3>
            <h3 class=" text-center text-xl">-Nick Bostrom</h3>  
             <About></About>
            <Projects></Projects>
            <Dataset></Dataset>
            <RunningProjects></RunningProjects>
            <Blog></Blog>
            <Team></Team>
            <Event></Event>
        </div>
    );
};

export default Home;