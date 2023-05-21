import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()

const PriveteContext = ({children}) => {
    const auth = getAuth(app)
    const provaider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(false)


    // create uer in email & password 
    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login in user email & password  
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)

    }

    // google sign in user  
    const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth,  provaider)
    }

    const logOUt = () =>{
        signOut(auth).then(() => {
            console.log('log out successfull')
            
          }).catch((error) => {
            
          }); 
    }

    useEffect(()=>{

        const unsucrib =()=>
            onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                setLoader(false)
            })
            return unsucrib()
    },[])
    console.log(user)

    const authInfo = {
        user,
        register,
        login,
        googleSignIn,
        logOUt,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PriveteContext;