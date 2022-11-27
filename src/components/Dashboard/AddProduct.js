import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Brand from './Brand';
import BrandModal from './BrandModal';

const AddProduct = () => {
    const brands = useLoaderData()
    const [brandModal, setBrandModal] = useState(null);
    return (
        <div>
           <h1>Select your brands</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    brands.map((brand,i) => <Brand key={i} brand={brand} setBrandModal={setBrandModal}></Brand>)
                }
                {
                    brandModal && <BrandModal brandModal={brandModal} setBrandModal={setBrandModal}></BrandModal>
                }
           </div>
        </div>
    );
};

export default AddProduct;