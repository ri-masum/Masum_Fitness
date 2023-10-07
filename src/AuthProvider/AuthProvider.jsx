import {  createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const auth=getAuth(app)

    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    const authInfo={
        user,
        signup,
        login,
    }

    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;