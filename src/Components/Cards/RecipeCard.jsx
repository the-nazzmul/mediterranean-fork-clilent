import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MdFavorite } from "react-icons/md";
import { toast } from 'react-toastify';



const RecipeCard = ({ recipe }) => {
    const { image_url, ingredients, method, name, rating } = recipe

    const [disabled, setDisables] = useState(false)

    const handleFavButton = () => {
        setDisables(true)
        toast('Marked as favorite!')
    }
    return (
        <div className="card bg-base-100 shadow-xl mb-16 bg-red-50 lg:p-12">
            <figure><img className=' max-h-fit rounded-xl border-8 border-white m-4' src={image_url} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}!</h2>
                <div className='flex items-center mb-4'>
                    <Rating
                        style={{ maxWidth: 130 }}
                        readOnly
                        orientation="horizontal"
                        value={rating}
                        className='mr-2'
                    />
                    <p>{rating}</p>
                </div>
                <>
                    <h4 className='font-bold underline text-red-600'>Ingredients:</h4>
                    {ingredients.map(ingredient => <li key={ingredients.indexOf(ingredient)} className='list-disc ml-2'>{ingredient}</li>)}
                </>
                <h4 className='font-bold underline text-red-600'>Cooking Method:</h4>
                <p>{method}</p>
                <div className="card-actions mt-4">
                    <button className="btn bg-red-600 border-none" disabled={disabled} onClick={handleFavButton}>Mark As Favorite <MdFavorite className='ml-2'></MdFavorite> </button>
                </div>

            </div>
        </div>
    );
};

export default RecipeCard;