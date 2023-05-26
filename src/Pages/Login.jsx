import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { googleLogin, gitHubLogin, login } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                setError('');
                navigate(from, {replace: true});
            })
            .catch(err => setError(err.message))
    }

    const handleGithubLogin = () => {
        gitHubLogin()
            .then(res => {
                setError('');
                navigate(from, {replace: true});
            })
            .catch(err => setError(err.message))
    }
    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(res => {
            toast('Login Successful!')
            setError('');
            navigate(from, {replace: true})
        })
        .catch(error => setError(error.message))
    }


    return (
        <div className='flex justify-center mt-24 mb-32'>
            <div>
                <div className="text-center lg:text-left my-8">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn bg-white text-red-600 hover:bg-red-200 hover:border-red-600 border-red-600" />
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-green-600 hover:bg-green-300 hover:text-white"> <span className='text-2xl mr-2'><FcGoogle></FcGoogle></span> Login with Google</button>
                        <button onClick={handleGithubLogin} className="btn bg-white text-black hover:bg-slate-400"> <span className='text-2xl mr-2'><FaGithub></FaGithub></span> Login with GitHub</button>

                        <small className='mt-8'>Don't have an account? <Link className='text-red-600 underline' to="/register">Register</Link></small>
                        <p className=' min-h-6'><small className='mt-8 text-red-600'>{error}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;