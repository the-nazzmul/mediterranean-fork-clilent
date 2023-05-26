import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {


    
    return (
        <div className='container mx-auto bg-gray-50'>
            <Header></Header>
            <div className=' min-h-[calc(100vh-88px)]'>
                <Outlet></Outlet>
            </div>
            <ToastContainer position='top-center'></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Layout;