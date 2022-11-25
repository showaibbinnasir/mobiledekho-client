import React from 'react';
import Product from './Product';

const ModalOpen = ({bookedProduct}) => {
    const {ProductName, brandName, seller_price, sellerName, location, yearOfuse, postedTime} = bookedProduct;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-3">{ProductName}</h3>
                    <input type="text" placeholder="Type here"
                            value={ProductName} disabled className="input input-bordered w-full" />
                    <input type='text' placeholder='type here' value={brandName} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' value={seller_price} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' value={sellerName} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' value={location} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' value={yearOfuse} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' value={postedTime} disabled className="input input-bordered w-full"/>
                    <input type="number" name="phone" placeholder='enter your phone number' className="input input-bordered w-full"/>
                    <input type="email" name="email" placeholder='enter your email' className="input input-bordered w-full"/>
                    
                </div>
            </div>
        </div>
    );
};

export default ModalOpen;