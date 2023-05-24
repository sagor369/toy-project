import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../PriveteRout/PriveteContext/PriveteContext';

const MyToys = () => {
    const [category , setCategory] = useState([])
    const {user} = useContext(AuthContext)
    const sellerEmail = user.email
    useEffect(() => {
        fetch(`https://toy-server-site-nine.vercel.app/user/${sellerEmail}`)
        .then(res => res.json())
        .then(data => console.log(data))

    }, [])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;