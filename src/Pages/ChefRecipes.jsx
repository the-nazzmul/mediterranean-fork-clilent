import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetailsCard from '../Components/Cards/ChefDetailsCard';
import RecipeCard from '../Components/Cards/RecipeCard';

const ChefRecipes = () => {
    const {chef, chefRecipes} = useLoaderData()

    return (
        <div>
            <ChefDetailsCard key={chef.id} chef={chef} ></ChefDetailsCard>
            {
                chefRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
            }
        </div>
    );
};

export default ChefRecipes;