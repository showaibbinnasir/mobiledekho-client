import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Login = () => {
    const {login} = useContext(authContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleSubmitBtn = (event) => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(res => {
            console.log(res)
            navigate(from, {replace : true})
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-6xl font-semibold text-warning'>Login</h1>
            <div className="hero">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitBtn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <h1><small>New to doctors portal? <Link className='text-primary' to='/register'>Register Now</Link></small></h1>
                        </form>
                        <div className="divider">OR</div>
                        <button className='btn btn-warning mx-8 my-2 text-white'>Sign in with google</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;