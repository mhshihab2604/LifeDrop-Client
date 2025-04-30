import React, { useEffect } from 'react';
import AuthContext from './AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';
const AuthProvider = ({children}) => {
    const [user,setUser]=React.useState(null);
    const [loading,setLoading]=React.useState(true)
const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(currentUser=>{
        setUser(currentUser);
        setLoading(false);
    
    })
    return () =>{
        unsubscribe();
    }
},[])

        const authInfo={
        user,
        loading,
        createUser,
        setUser,
        setLoading,
        signIn
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;