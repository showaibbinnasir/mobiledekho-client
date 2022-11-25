import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1 className='text-4xl text-warning font-semibold my-6'>Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12'>
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;