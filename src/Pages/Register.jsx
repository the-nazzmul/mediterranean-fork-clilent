import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const [error, setError] = useState('')

    const { register, updateUser, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const registrationHandler = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        const passwordCheck = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password));
        if (!passwordCheck) {
            setError('Password must contain 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and should be at least 8 characters');
            return;
        }
        if (email, password) {
            register(email, password)
                .then(res => {
                    updateUser(name, photoUrl)
                    toast('Registration Successful!')
                    navigate('/')
                })
                .catch(err => setError(err.message))
        }

    }

    return (
        <div className='flex justify-center mt-24 mb-32'>
            <div>
                <div className="text-center lg:text-left my-8">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={registrationHandler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photoUrl' className="input input-bordered" />
                            </div>
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
                                <input type="submit" value="Register" className="btn bg-white text-red-600 hover:bg-red-200 hover:border-red-600 border-red-600" />
                            </div>

                        </form>
                        <small className='mt-8'>Already have an account? <Link className='text-red-600 underline' to="/login">Login</Link></small>
                        <p className=' min-h-6'><small className='mt-8 text-red-600'>{error}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;