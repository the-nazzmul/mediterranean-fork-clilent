import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ChefDetailsCard = ({ chef }) => {
    const { bio, experience, likes, name, num_recipes, picture_url } = chef
    return (
        <div id='container' className='lg:flex bg-red-100 p-8 lg:p-16 gap-12 items-center my-2 lg:my-8'>
            <div>
                <LazyLoadImage
                        effect="blur"
                        src={picture_url} 
                        className='rounded-full border-4 border-white  mx-auto my-auto mb-4'/>
            </div>
            <div>
                <div className='flex gap-8 mb-4 justify-between lg:justify-start'>
                    <p className='flex items-center '><GiAchievement className='text-xl text-pink-600 mr-1 items-center' />{experience}</p>
                    <p className='flex items-center'><TbChefHat className='text-xl text-pink-600 mr-1 items-center' />{num_recipes}</p>
                    <p className='flex items-center'><AiOutlineLike className='text-xl text-pink-600 mr-1 items-center' /> {likes}</p>
                </div>
                <h2 className='text-2xl font-bold mb-2'>{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default ChefDetailsCard;