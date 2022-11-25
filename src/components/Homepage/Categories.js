import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ categories }) => {
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className='text-warning mx-12'>
            <h1 className='text-4xl font-semibold my-5'>Categories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center'>
                {
                    categories.map(category => <div className='flex justify-center'>
                        <div className=" card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={category.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body flex justify-center items-center">
                            <h2 className="card-title text-white">{category.brand_name}</h2>
                            <div className="card-actions">
                                <button onClick={()=> handleNavigate(category.brand_id)} className="btn btn-warning">See all phone</button>
                            </div>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;