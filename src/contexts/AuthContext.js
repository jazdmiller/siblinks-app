import React, { useContext, useEffect, useState } from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '../lib/firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    function signup(email, password, firstName) {
        
      
       return createUserWithEmailAndPassword(auth, email, password)
       .then(async (userCredentials) => {
        console.log(userCredentials)
        await updateProfile( userCredentials.user, {
            displayName: capitalizeFirstLetter(firstName)
        })
        console.log("Updated user: ", userCredentials.user);
       })
       .then(() => {
        setCurrentUser(auth.currentUser);
    })
    .catch(error => {
        console.error("Error updating profile: ", error);
    });
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

       const unsubscribe =  auth.onAuthStateChanged(user => {
           setCurrentUser(user) 
        setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
