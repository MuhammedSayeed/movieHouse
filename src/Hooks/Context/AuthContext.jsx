import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../../services/firebase/firebase.js";



export const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user,setUser] = useState ({});

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
       return signOut(auth);
    } 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe()
        }
    },[])

    return (
        <UserContext.Provider value={{createUser,logIn,logOut,user}}>
            {children}
        </UserContext.Provider>  
    )  
}

export default AuthContextProvider
