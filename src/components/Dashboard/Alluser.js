import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Alluser = () => {
    const {data : allUser = [], refetch} = useQuery({
        queryKey : ['allUser'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBtn = id =>{
        fetch(`http://localhost:5000/users/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
    }

    console.log(allUser);
    return (
        <div>
            <h1 className='text-2xl text-warning font-semibold'>All users</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            allUser.map((order, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.role}</td>
                                <td><button onClick={()=>handleDeleteBtn(order._id)} className='btn btn-error'>Delete</button></td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;