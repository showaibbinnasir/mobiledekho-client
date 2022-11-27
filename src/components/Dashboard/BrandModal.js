import React, { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';

const BrandModal = ({brandModal, setBrandModal}) => {
    console.log(brandModal)
    const{user} = useContext(authContext)
    const handleSubmitBtn = event => {

    }
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