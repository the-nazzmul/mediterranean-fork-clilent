import React from 'react';
import client1 from './../assets/review/client-1.jpg'
import client2 from './../assets/review/client-2.jpg'
import client3 from './../assets/review/client-3.jpg'
import client4 from './../assets/review/client-4.jpg'

const ReviewSection = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-20 text-red-600 rounded-2xl py-4 border-red-600 lg:w-1/3 mx-auto border-4 font-bold flex justify-center items-center'>Reviews </h1>

            <div className='mb-20 lg:flex gap-2'>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
                    <figure className="px-10 pt-10">
                        <img src={client1} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Adrew James</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo laborum explicabo reiciendis sint, minima corrupti ex facilis praesentium illum perferendis dolor a nam expedita laboriosam vero veritatis, repudiandae doloribus!</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
                    <figure className="px-10 pt-10">
                        <img src={client2} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Thanos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo laborum explicabo reiciendis sint, minima corrupti ex facilis praesentium illum perferendis dolor a nam expedita laboriosam vero veritatis, repudiandae doloribus!</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
                    <figure className="px-10 pt-10">
                        <img src={client3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">John Wick</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo laborum explicabo reiciendis sint, minima corrupti ex facilis praesentium illum perferendis dolor a nam expedita laboriosam vero veritatis, repudiandae doloribus!</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
                    <figure className="px-10 pt-10">
                        <img src={client4} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tony Stark</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo laborum explicabo reiciendis sint, minima corrupti ex facilis praesentium illum perferendis dolor a nam expedita laboriosam vero veritatis, repudiandae doloribus!</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
            <button className='btn bg-red-600 border-none mb-20'>See more</button>
            </div>
        </div>
    );
};

export default ReviewSection;