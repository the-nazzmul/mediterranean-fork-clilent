import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Components/Cards/ChefCard';
import { SiCodechef } from "react-icons/si";
import CulinaryCourse from '../Components/CulinaryCourse';
import ReviewSection from '../Components/ReviewSection';
import { AuthContext } from '../Providers/AuthProvider';
import LoadingSpinner from '../Components/LoadingSpinner';


const Home = () => {
    const [chefs, setChefs ] = useState(null)
    const chefsData = useLoaderData()
    
    useEffect(()=>{
        setChefs(chefsData)
    },[])

    if(chefs === null){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <div className='mb-24'><Banner></Banner></div>            
            <h1 className='text-4xl text-center my-20 text-red-600 rounded-2xl py-4 border-red-600 lg:w-1/3 mx-auto border-4 font-bold flex justify-center'>The Chefs <SiCodechef className='ml-2'></SiCodechef></h1>
            <div className='grid lg:grid-cols-3 gap-4 mb-36'>
                {
                    chefs.map(chef => <ChefCard chef={chef} key={chef.id}></ChefCard>)
                }
            </div>
            <CulinaryCourse></CulinaryCourse>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;