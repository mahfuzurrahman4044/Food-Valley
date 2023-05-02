import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContex = createContext(null);

const auth = getAuth(app)

const Provider = ({ children }) => {

    // const createUser = (email, password) => {
    //     setLoader(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }

    const user={displayName: "Mahfuzur Rahman"}
    

    const authInfo = {
        user,
        // loader,
        // createUser,
        // signIn,
        // logOut,
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