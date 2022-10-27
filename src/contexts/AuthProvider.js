import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../configurations/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState()

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
     
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    
    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser);
        })

        return () => {
            unSubscribe();
        } 

    },[])

    const value = {user, createUser, signIn, googleSignIn, githubSignIn};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;