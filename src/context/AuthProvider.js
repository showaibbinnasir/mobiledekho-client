import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const authContext = createContext('');
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const user = {
        displayName : 'Showaib bin Nasir'
    }

    const authInfo = {user}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;