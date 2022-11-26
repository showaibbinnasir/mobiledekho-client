import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Register = () => {
    const {createUser, updateUser} = useContext(authContext);
    const handleSubmitBtn = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.options.value;
        console.log(name, email, password, role)
        createUser(email, password)
        .then(data => {
            console.log(data)
            handleUpdate(name)
            saveUser(name, email, role)
        })
        .then(err => console.log(err))
    }

    const handleUpdate = (name) => {
        const profile = {
            displayName : name

        }
        updateUser(profile)
        .then(()=>{})
        .catch(err => console.log(err))
    }

    const saveUser = (name, email, role) =>{
        const userInfo = {name, email, role}
        fetch('http://localhost:5000/users',{
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-warning'>Registration</h1>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitBtn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User name</span>
                                </label>
                                <input required type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input required title='minimum 8 character needed with atleast one character and one number' pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <select name='options' className="select select-accent w-full max-w-xs">
                                <option disabled selected>What role you want to play?</option>
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                            <div className="form-control mt-6">
                                
                                <input type="submit" className="btn btn-warning" />
                            </div>
                            <h1><small>Already User? <Link className='text-primary' to='/login'>Login Now</Link></small></h1>
                        </form>
                        <div className="divider">OR</div>
                        <button className='btn btn-warning mx-8 my-2 text-white'>Sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;