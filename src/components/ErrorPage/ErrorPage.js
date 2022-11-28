import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-86 flex justify-center items-center'>
            <div>
                <h1 className='text-2xl text-warning font-bold'>Ops look like wrong route</h1>
                <img className='h-72' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="" />
                <Link to='/' className='btn btn-warning my-6'>Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;