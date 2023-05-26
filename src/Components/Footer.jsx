import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-black md:py-32 py-12 md:px-60 px-16 divide-y'>
            <div className='md:grid xl:grid-cols-6 md:grid-cols-3 gap-10 mb-8'>
                <div className=' col-span-4 mb-8 '>
                    <h3 className='text-white text-2xl font-bold mb-2'>The Mediterranean Fork</h3>
                    <p className='text-gray-300 mb-2'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='text-white flex gap-12 mt-8 text-3xl'>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
                <div className='text-gray-300 mb-8 '>
                    <h3 className='text-white text-xl mb-2'>Company</h3>
                    <p className='mb-2'>About Us</p>
                    <p className='mb-2'>Work</p>
                    <p className='mb-2'>Latest News</p>
                    <p className='mb-2'>Careers</p>
                </div>
                
                
                <div className='text-gray-300 mb-8 '>
                    <h3 className='text-white text-xl mb-2'>Contact</h3>
                    <p className='mb-2'>524 Broadway , NYC</p>
                    <p className='mb-2'>+11777-978-5570</p>
                    
                </div>
                
            </div>
            <div className='text-gray-400 text-sm pt-8 md:flex md:justify-between'>
                <p>@2023 The Mediterranean Fork. All Rights Reserved</p>
                <p>powered by <strong>The Mediterranean Fork</strong></p>
            </div>
        </div>
    );
};

export default Footer;