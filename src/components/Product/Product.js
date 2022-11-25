import React from 'react';

const Product = ({ product, setBookedProduct }) => {
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
                        </div> : <p>Seller name : {product.sellerName}</p>
                    }
                    <p>Original price : {product.original_price} Taka</p>
                    <p>Resale price : {product.seller_price} Taka</p>

                    <div className="card-actions justify-end">
                        
                       
                        {
                            product.verification === true ?
                             <label onClick={()=> setBookedProduct(product)} className="btn btn-warning" htmlFor="my-modal-3">Book Now</label> :
                             <label disabled title='not verified' className="btn btn-warning" htmlFor="my-modal-3">Book Now</label>
                        }

                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;