import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from './About';
import Banner from './Banner';
import Categories from './Categories';

const Homepage = () => {
    const data = useLoaderData();
    let finalData = [];
    if(data){
        finalData = data;
    }
    else{
        <div>Loading</div>
    }
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Categories categories={finalData}></Categories>
            <About></About>
        </div>
    );
};

export default Homepage;