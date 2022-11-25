import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from './About';
import Banner from './Banner';
import Categories from './Categories';

const Homepage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Categories categories={data}></Categories>
            <About></About>
        </div>
    );
};

export default Homepage;