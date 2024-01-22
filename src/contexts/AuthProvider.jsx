import React, { createContext, useEffect, useState } from 'react';

import app from "../firebase/firebase.config";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const auth = getAuth();






const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);



    // create user
    function createUser(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };



    //create user using gmail;
    function signUpWithGmail() {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };




    //login
    function login(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };




    //Log out
    function logOut() {
        return signOut(auth);
    };


    //user is available or not;
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {

                const details={
                    currentuserEmail:currentUser.email,
                    currentuserphoto: currentUser.photoURL
                }
                
                setUser(currentUser.photoURL);
                setEmail(currentUser.email)
               
                setLoading(false);
            } else {
                setUser("");
            };
        })

        return()=>{
            return unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        email,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logOut
    };


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider