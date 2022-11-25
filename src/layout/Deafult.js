import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';

const Deafult = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Deafult;