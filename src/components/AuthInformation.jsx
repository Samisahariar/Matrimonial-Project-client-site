import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosusPublic from "../hooks/useAxiosusPublic";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import useAxiousSecure from "../hooks/useAxiousSecure";


const queryClient = new QueryClient()

export const AuthContext = createContext();

const AuthInformation = ({ children }) => {

    const axioussecure = useAxiousSecure();
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
            const usrEmail = currentUser?.email || user?.email;
            const loggedUser = { email: usrEmail }
            setUser(currentUser);
            setLoader(false);
            if (currentUser) {
                axioussecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            } else {
                axioussecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const name = "sami"
    const authinfo = { loader, user, setUser, name, logout, loginwithgoogle, loginwithemail, signinwithemail, updateUser }
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>

    );
};

export default AuthInformation;