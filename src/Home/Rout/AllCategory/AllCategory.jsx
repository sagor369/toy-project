import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../../Category';

const AllCategory = () => {
    const allCategorys = useLoaderData()

    return (
        <div className='py-4 my-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 '>
            <h2 className='text-5xl font-bold text-center py-4 text-pink-300 uppercase border-b mb-5'>all category </h2>
            <div className='grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                allCategorys.map(category => <Category
                key={category._id}
                category = {category}
                ></Category>)
            }
            </div>
            
        </div>
    );
};

export default AllCategory;