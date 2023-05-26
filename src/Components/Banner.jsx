import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        
        <div className="hero h-[500px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-left"> The <span className='text-7xl text-red-600 lg:border-4 py-2'>M</span>editerranean <span className='lg:border-4 lg:pt-4'><span className='text-7xl text-red-600'>F</span>ork</span></h1>
                    <p className="mb-5">Welcome to The Mediterranean Fork, where we invite you to discover the delicious flavors of the Mediterranean cuisine. Whether you're an experienced cook or just starting out, our easy-to-follow recipes will help you create authentic and healthy meals that will transport you to the sun-kissed shores of the Mediterranean. </p>
                    <button className="btn bg-red-600 border-none ">Get Started</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;