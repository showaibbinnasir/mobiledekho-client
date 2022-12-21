import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthProvider';
import Product from './Product';

const ModalOpen = ({bookedProduct, setBookedProduct}) => {
    const {user} = useContext(authContext)
    const {ProductName, brandName, seller_price, sellerName, location, yearOfuse, postedTime} = bookedProduct;

    const handleSubmitBtn = event =>{
        event.preventDefault();
        const form = event.target;
        const ProductName = form.ProductName.value;
        const brandName = form.brandName.value;
        const seller_price = form.seller_price.value;
        const sellerName = form.sellerName.value;
        const location = form.location.value;
        const yearsOfuse = form.yearsOfuse.value;
        const postedTime = form.postedTime.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const orderInfo = {
            ProductName, brandName, seller_price, sellerName, yearsOfuse, postedTime, phone, email, location
        }
        console.log(orderInfo)
        fetch('https://mobiledekho-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Added to the my orders')
            setBookedProduct(null)
            
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmitBtn} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-3">{ProductName}</h3>
                    <input type="text" placeholder="Type here" name='ProductName'
                            value={ProductName} disabled className="input input-bordered w-full" />
                    <input type='text' placeholder='type here' name='brandName' value={brandName} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' name='seller_price' value={seller_price} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' name='sellerName' value={sellerName} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' name='location' value={location} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' name='yearsOfuse' value={yearOfuse} disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='type here' name='postedTime' value={postedTime} disabled className="input input-bordered w-full"/>
                    <input type="number" name="phone" placeholder='enter your phone number' className="input input-bordered w-full"/>
                    <input type="email" name="email" value={user?.email} placeholder='enter your email' className="input input-bordered w-full"/>
                    <input type='submit' className='btn btn-warning my-3'/>
                    
                </form>
            </div>
        </div>
    );
};

export default ModalOpen;