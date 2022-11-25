import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='mx-12'>
                <h1 className='text-warning text-4xl font-semibold'>Welcome to <span className='text-white'>mobileDekho.com</span></h1>
                <p className='text-white'>Here you can find all the second hand mobile phone with reasonable price. Find your favorite phone and lead a easier life.</p>
                <button className='btn btn-warning my-6 shadow-lg'>Find your phone now</button>
            </div>
        </div>
    );
};

export default Banner;