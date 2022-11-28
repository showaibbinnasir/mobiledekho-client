import React from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from './AddProductForm';

const Brand = ({ brand, setBrandModal, length }) => {
    
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={brand.thumbnail} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand.brand_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <label onClick={()=> setBrandModal(brand)} className="btn btn-warning" htmlFor="my-modal-3">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;