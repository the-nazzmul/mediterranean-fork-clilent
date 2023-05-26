import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { Link } from 'react-router-dom';



const ChefCard = ({ chef }) => {
    const { name, picture_url, experience, likes, num_recipes,id } = chef
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-2">
            <figure><img className='h-full' src={picture_url} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='flex items-center '><GiAchievement className='text-xl text-pink-600 mr-1 items-center' />{experience}</p>
                <p className='flex items-center'><TbChefHat className='text-xl text-pink-600 mr-1 items-center' />{num_recipes}</p>
                <p className='flex items-center'><AiOutlineLike className='text-xl text-pink-600 mr-1 items-center' /> {likes}</p>
                <div className="card-actions">
                    <Link className="btn bg-red-600 border-0 hover:bg-red-400" to={`/chefs/${id}`}>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;