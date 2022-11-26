import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Alluser = () => {
    const users = useLoaderData();
    return (
        <div>
            My orders
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users.map((order, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.role}</td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;