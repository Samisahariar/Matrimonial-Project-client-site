import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosusPublic from "../hooks/useAxiosusPublic";

export const AuthContext = createContext();

const AuthInformation = ({ children }) => {

    const axiousPublic = useAxiosusPublic();
    const [user, setUser] = useState();
    const [loader, setLoader] = useState();

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const signinwithemail = (email, password) => {
        setLoader(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginwithemail = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const loginwithgoogle = () => {
        setLoader(false);
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoader(false);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiousPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoader(false);
                        }
                    })
            }

            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoader(false);
            }

        });
        return () => {
            return unsubscribe();
        }
    }, )


    const name = "sami"
    const authinfo = { loader, user, setUser, name, logout, loginwithgoogle, loginwithemail, signinwithemail, updateUser }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthInformation;