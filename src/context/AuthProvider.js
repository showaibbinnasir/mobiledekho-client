import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const authContext = createContext('');
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false)
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, loading, createUser}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;