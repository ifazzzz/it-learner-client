import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../configurations/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {createUser};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;