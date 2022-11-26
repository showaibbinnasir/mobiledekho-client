import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="drawer drawer-mobile">
                <input id="drawer-id" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="drawer-id" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-id" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;