import React, { createContext, useEffect, useState, } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    useEffect(()=>{
        const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
             
              const uid = currentUser.uid;
              // ...
            } else {
             
            }
          });
          return () =>{
            unsubscribe();
          }
    },[]);

    const logOut = () =>{
        setLoading(true);
      return signOut(auth);
       
    };


    const authInfo = {user, createUser,loading, logInUser, logOut,googleSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

   
    );
};


export default UserContext;