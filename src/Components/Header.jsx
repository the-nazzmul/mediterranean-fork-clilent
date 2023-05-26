import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from "react-icons/gi";
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    const { user, logOut, setUser } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <Link className="font-bold p-4 lg:text-2xl flex items-baseline" to='/'>The  <span className=' text-3xl lg:text-4xl text-red-600'>M</span>editerranean <span className='text-3xl lg:text-4xl text-red-600 '>F</span>ork <span className='text-3xl text-red-600 hidden lg:block lg:ml-2'> <GiKnifeFork /> </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 text-gray-500">
                    <li className='hover:text-gray-700 p-4 rounded-lg font-bold'><ActiveLink to='/'>Home</ActiveLink></li>
                    <li className='hover:text-gray-700 p-4 rounded-lg font-bold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <>
                        {
                            user.photoURL ?
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : 'Name not set'}>
                                    <img className='w-12 h-12 rounded-full border-4 border-gray-400 mr-2' src={user.photoURL} />
                                </div> :
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : 'Name not set'}>
                                    <FaUserCircle className='w-12 h-12 rounded-full border-4 border-gray-600 mr-2'></FaUserCircle>
                                </div>

                        }

                    </>

                }
                {
                    user ?
                        <button onClick={handleLogout} className='btn bg-white text-red-600 hidden lg:block hover:bg-red-200 hover:border-red-600 rounded-full border-red-600 border-2'> Logout</button>
                        :
                        <Link to="/login">
                            <button className='btn bg-white text-red-600 hidden lg:block hover:bg-red-200 hover:border-red-600 rounded-full border-red-600 border-2'> Login</button>
                        </Link>
                }


                {/* dropdown menu for mobile view */}
                {
                    user ?
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                                <li className='font-bold hover:text-gray-700 p-2 rounded-lg'><ActiveLink to='/'>Home</ActiveLink></li>
                                <li className='font-bold hover:text-gray-700 p-2 rounded-lg'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                                <li onClick={handleLogout} className='btn bg-white text-red-600 border-red-600 rounded-xl border-2'>
                                    Logout
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                                <li className='font-bold hover:text-gray-700 p-2 rounded-lg'><ActiveLink to='/'>Home</ActiveLink></li>
                                <li className='font-bold hover:text-gray-700 p-2 rounded-lg'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                                <Link to="/login" className='btn bg-white text-red-600 border-red-600 rounded-xl border-2'>
                                    Login
                                </Link>
                            </ul>
                        </div>

                }
            </div>
        </div>
    );
};

export default Header;