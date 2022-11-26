import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="drawer drawer-mobile">
                <input id="drawer-id" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-id" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;