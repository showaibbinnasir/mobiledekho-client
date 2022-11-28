import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalOpen from '../Product/ModalOpen';
import Product from '../Product/Product';

const AllPhone = () => {
    const phones = useLoaderData();
    const [bookedProduct, setBookedProduct] = useState(null);
    return (
        <div>
            <h1 className='text-4xl text-warning font-semibold'>All phones</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    phones.map(phone => <Product key={phone._id} product={phone} setBookedProduct={setBookedProduct}></Product>)
                }
                {
                    bookedProduct && <ModalOpen bookedProduct={bookedProduct} setBookedProduct={setBookedProduct}></ModalOpen>
                }
            </div>
        </div>
    );
};

export default AllPhone;