import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthProvider';

const Orders = () => {
    
    const { user } = useContext(authContext);
    const {data : orders = [], refetch} = useQuery({
        queryKey : ['allUser'],
        queryFn : async()=>{
            const res = await fetch(`https://mobiledekho-server.vercel.app/orders?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBtn = id =>{
        fetch(`https://mobiledekho-server.vercel.app/orders/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('deleted successfully')
            refetch()
        })
        
    }
    // useEffect(() => {
    //     fetch(`https://mobiledekho-server.vercel.app/orders?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setOrders(data)
    //         })
    // }, [user?.email])
    return (
        <div>
            My orders
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Seller name</th>
                            <th>Buyer email</th>
                            <th>Phone</th>
                            <th>Make Payment</th>
                            <th>Deletion</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            orders.map((order, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td>{order.ProductName}</td>
                                <td>{order.brandName}</td>
                                <td>{order.sellerName}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                {
                                    order?.paid === true ? <td>Paid</td> : 
                                    <td><Link to={`/dashboard/payment/${order._id}`} className='btn btn-warning'>Pay</Link></td>
                                }
                                <td><button onClick={()=> handleDeleteBtn(order._id)} className='btn btn-error'>Delete</button></td>
                                
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;