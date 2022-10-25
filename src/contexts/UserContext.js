import React, { createContext, useEffect, useState, } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    useEffect(()=>{
        const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
      return signOut(auth)
       
    }

    const authInfo = {user, createUser, logInUser, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

   
    );
};


export default UserContext;