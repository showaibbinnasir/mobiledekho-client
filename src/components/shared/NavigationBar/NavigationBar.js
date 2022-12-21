import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext)

    const handleLogOutBtn = () => {
        logOut();
    }
    return (
        <div className=' sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-warning w-52">
                            <li className='font-semibold'><Link to='/'>Home</Link></li>
                            <li className='font-semibold'><Link to='/allphone'>All phones</Link></li>




                            <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-warning normal-case text-xl">MobileDekho</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-warning">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/allphone'>All Phones</Link></li>
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">


                    <div className="dropdown dropdown-end">
                        {
                            user?.email ? <>
                                <label tabIndex={0} className="btn btn-warning m-1 scale-75">{user?.displayName}</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 text-warning shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <button onClick={handleLogOutBtn} className='btn btn-warning'>Logout</button>
                                </ul></> : <>
                                <label tabIndex={0} className="btn btn-warning m-1">Login</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 text-warning shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </ul>
                            </>

                        }
                    </div>
                    <label tabIndex={0} htmlFor='drawer-id' className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>


                </div>
            </div>
        </div>
    );
};

export default NavigationBar;