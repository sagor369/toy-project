import React, { useEffect, useState } from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';

const Categorys = () => {
    const [categorys, setCategory] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/categorys")
        .then(res => res.json())
        .then(data => setCategory(data))

    },[])
    console.log(categorys)
    return (
        <div className='py-4 my-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 '>
            <h2 className='text-5xl font-bold text-center py-4 text-pink-300 uppercase border-b mb-5'>category </h2>
            <div className='grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                categorys.slice(0,8).map(category => <Category
                key={category._id}
                category = {category}
                ></Category>)
            }
            </div>
            <div className='text-center py-6'>
            <Link to='/categorys' className="btn">See More</Link>
            </div>

        </div>
    );
};

export default Categorys;