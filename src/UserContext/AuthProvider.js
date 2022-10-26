import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] =useState(false)
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);

    };

    const authInfo = {
        user,
        providerLogin,
        
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;