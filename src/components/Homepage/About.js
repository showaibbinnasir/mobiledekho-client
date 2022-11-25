import React from 'react';

const About = () => {
    return (
        <div className='text-warning mx-6'>
            <h1 className='my-6 font-semibold text-4xl'>About Us</h1>
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img className='rounded-lg h-64' src="https://media.istockphoto.com/id/1035672660/photo/3d-phone-reciever-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=1xFsJhBEajFO4pXswFCNSAZkHlvTLej7RMevLOx8Q5c=" alt=''/>
                        <div>
                            <h1 className="text-4xl font-bold text-warning">About mobileDekho.com</h1>
                            <p className="py-6 text-white text-justify lg:text-center">This is a website where you can find all the second hand phone in reasonable price and also you can sell your phone in a good price.We are concern about you security thats why you can purchase anything easily.</p>
                            <button className="btn btn-warning">Read Terms And Condition</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;