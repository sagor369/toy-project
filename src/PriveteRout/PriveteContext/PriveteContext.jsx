import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()

const PriveteContext = ({children}) => {
    const auth = getAuth(app)
    const provaider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(false)


    // create uer in email & password 
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login in user email & password  
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth , email, password)

    }

    // google sign in user  
    const googleSignIn = () =>{
       return signInWithPopup(auth,  provaider)
    }

    useEffect(()=>{
        fetch("http://localhost:5000/categorys")
        .then(res => res.json())
        .then(data => console.log(data.length))

    },[loading])

    const authInfo = {
        user,
        register,
        login,
        googleSignIn,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PriveteContext;