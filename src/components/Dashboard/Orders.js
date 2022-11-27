import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthProvider';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(authContext);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [user?.email])
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
                                <td><button className='btn btn-primary'>Pay</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;