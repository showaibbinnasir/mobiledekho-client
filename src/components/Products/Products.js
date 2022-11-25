import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalOpen from '../Product/ModalOpen';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    const [bookedProduct, setBookedProduct] = useState(null);
    console.log(products);
    return (
        <div>
            <h1 className='text-4xl text-warning font-semibold my-6'>Products of {products[0].brandName}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12'>
                {
                    products.map(product => <Product key={product.product_id} product={product} setBookedProduct={setBookedProduct}></Product>)
                }
                {
                    bookedProduct && <ModalOpen bookedProduct={bookedProduct}></ModalOpen>
                }
            </div>
        </div>
    );
};

export default Products;