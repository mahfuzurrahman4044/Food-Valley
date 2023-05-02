import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContex = createContext(null);

const auth = getAuth(app)

const Provider = ({ children }) => {

    const [user, setUser] = useState(null);



    const createUser = (email, password) => {
        // setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = (githubProvider) => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe;
        }
    },[])


    const authInfo = {
        user,
        // loader,
        createUser,
        signInWithEmail,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default Provider;