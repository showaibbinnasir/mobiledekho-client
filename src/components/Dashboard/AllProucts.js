import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllProucts = () => {
    const {data : allProducts = [], refetch, isLoading} = useQuery({
        queryKey : ['allProducts'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        <progress className="progress w-56"></progress>
    }
    const handleDeleteBtn = id =>{
        fetch(`http://localhost:5000/products/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('deleted successfully')
            refetch()
        })
    }

    const handleVerifyBtn = id =>{
        const verification = true;
        const verify = {verification};
        fetch(`http://localhost:5000/products/update/${id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(verify)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold text-warning'>All Products</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Brand Name</th>
                            <th>Seller Name</th>
                            <th>Seller Price</th>
                            <th>Location</th>
                            <th>Verification</th>
                            <th>Deletion</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            allProducts.map((product, i) => <tr key={i}>
                                <th>{product._id}</th>
                                <th>{product.ProductName}</th>
                                <th>{product.brandName}</th>
                                <th>{product.sellerName}</th>
                                <th>{product.seller_price}</th>
                                <th>{product.location}</th>
                                {
                                    product.verification ? 
                                    <th><button disabled className='btn btn-warning'>Verified</button></th> : 
                                    <th><button onClick={()=>handleVerifyBtn(product._id)} className='btn btn-warning'>Verify</button></th>
                                }
                                <th><button onClick={()=> handleDeleteBtn(product._id)} className='btn btn-error'>Delete</button></th>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProucts;