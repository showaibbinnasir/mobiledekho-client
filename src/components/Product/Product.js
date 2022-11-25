import React from 'react';

const Product = ({ product }) => {
    return (
        <div className='text-white'>
            <div className="card card-side bg-base-100 shadow-2xl">
                <figure><img src={product.thumbnail} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.ProductName}</h2>
                    {
                        product.verification === true ? <div className='flex'>
                            <p>Seller name: {product.sellerName}</p>
                            <p><small>Verified</small></p>
                        </div>:<p>Seller name : {product.sellerName}</p>
                    }
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;