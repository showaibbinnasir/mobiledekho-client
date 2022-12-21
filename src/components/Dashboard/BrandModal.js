import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthProvider';

const BrandModal = ({brandModal, setBrandModal}) => {
    console.log(brandModal)
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        fetch('https://mobiledekho-server.vercel.app/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])
    const{user} = useContext(authContext)
    const handleSubmitBtn = event => {
        event.preventDefault();
        const form = event.target;
        const brand_id = brandModal.brand_id;
        const productId = "0" + (allProducts.length + 1);
        const ProductName = form.ProductName.value;
        const back = form.rearcamera.value;
        const front = form.frontcamera.value;
        const ram = form.ram.value;
        const rom = form.rom.value;
        const memory = {ram, rom}
        const camera = {back, front};
        const chipset = form.chipset.value;
        const original_price = form.originalprice.value;
        const seller_price = parseInt(form.sellerprice.value);
        const thumbnail = form.thumbnail.value;
        const yearOfuse = form.yearOfUse.value;
        const location = form.location.value;
        const postedTime = form.postedTime.value;
        const verification = false;
        const sellerName = form.sellername.value;
        const sellerId = allProducts.length + 1;
        const brandName = form.brandName.value;

        const productInfo = {
            brand_id,
            productId, 
            ProductName,
            camera,
            memory,
            chipset,
            original_price,
            seller_price,
            thumbnail,
            yearOfuse,
            location,
            postedTime,
            verification,
            sellerName,
            sellerId,
            brandName
        }
        fetch('https://mobiledekho-server.vercel.app/products', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('product added successfully')
            setBrandModal(null)
        })
    }
    console.log(allProducts.length)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmitBtn} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-7">✕</label>
                    <h3 className="text-lg font-bold my-3">{brandModal.brand_name}</h3>
                    <input type="text" placeholder="Product Name" name='ProductName'
                              className="input input-bordered w-full" />
                    <input type='text' placeholder='type here' name='brandName' value={brandModal.brand_name}  disabled className="input input-bordered w-full"/>
                    <input type='text' placeholder='Front camera' name='frontcamera'  className="input input-bordered w-full"/>
                    <input type='text' placeholder='Rear Camera' name='rearcamera'  className="input input-bordered w-full"/>
                    <input type='text' placeholder='RAM' name='ram'  className="input input-bordered w-full"/>
                    <input type='text' placeholder='ROM' name='rom'  className="input input-bordered w-full"/>
                    <input type='text' placeholder='chipset' name='chipset'  className="input input-bordered w-full"/>
                    <input type="number" name="originalprice" placeholder='Original Price' className="input input-bordered w-full"/>
                    <input type="text" name="sellerprice" placeholder='Seller Price' className="input input-bordered w-full"/>
                    <input type="text" name="thumbnail" placeholder='Image URL' className="input input-bordered w-full"/>
                    <input type="text" name="location" placeholder='Location' className="input input-bordered w-full"/>
                    <input type="text" name="yearOfUse" placeholder='Year of Use' className="input input-bordered w-full"/>
                    <input type="text" disabled name="postedTime" placeholder='Posted time' value={Date()} className="input input-bordered w-full"/>
                    <input type="text" name="sellername" placeholder='Seller Name' className="input input-bordered w-full" value={user.displayName}/>
                    <input type='submit' className='btn btn-warning my-3'/>
                    
                </form>
            </div>
        </div>
    );
};

export default BrandModal;