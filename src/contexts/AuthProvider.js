import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../configurations/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);
// Auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
     
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
     
    // firebase authentication functions
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
     
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // getting the logged in user info
    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser);
             setLoading(false)
        })

        return () => {
            unSubscribe();
        } 

    },[])
    // sending contexts
    const value = {
        user, 
        loading,
        verifyEmail,
        setLoading, 
        createUser, 
        signIn, 
        googleSignIn, 
        githubSignIn,
        updateUserProfile, 
        logOut
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;