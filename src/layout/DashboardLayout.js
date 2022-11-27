import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';
import { authContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const {user} = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    console.log(isAdmin)
    console.log(isSeller)
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
                    <ul className="menu p-4 w-80 bg-base-100 lg:bg-base-0 text-base-content">
                        {
                            isAdmin === true ? <>
                            <li><Link to='/dashboard/all-user'>All user</Link></li>
                            <li><Link to='/dashboard/allproducts'>All Products</Link></li>
                            
                            </> : 
                             isSeller === true ? <li><Link to='/dashboard/addproduct'>Add product</Link></li>
                               : <>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            <li><a>Sidebar Item 2</a></li>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;