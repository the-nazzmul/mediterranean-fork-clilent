import React from 'react';
import culinaryPic from './../assets/culinary.jpg'
import { TbChefHat } from "react-icons/tb";

const CulinaryCourse = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-20 text-red-600 rounded-2xl py-4 border-red-600 lg:w-1/3 mx-auto border-4 font-bold flex justify-center items-center'>Our Culinary Course <TbChefHat className='ml-2'></TbChefHat> </h1>
            <div className="hero py-24 lg:px-12 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={culinaryPic} className="lg:max-w-sm rounded-lg shadow-2xl mb-12 lg:mb-0" />
                    <div className='lg:ml-8 ml-2'>
                        <h1 className="text-5xl font-bold text-red-600">Enroll to our culinary course!</h1>
                        <p className="py-6 text-justify">We offer beginner friendly culinary course for people who want to start cooking professionally. Our professional instructors will guide you to build solid foundation for your culinary career. Click on the <span className='text-red-600'>Get Started</span> button to know more about the course.</p>
                        <button className="btn bg-red-600 border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CulinaryCourse;