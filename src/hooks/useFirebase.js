import { getAuth, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)



    const auth = getAuth();
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])



    return {
        user,
        signInWithGoogle,
        logout,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;