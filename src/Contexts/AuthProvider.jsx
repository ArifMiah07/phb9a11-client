import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Registration successful!");
            return result;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful!");
            return result;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            toast.success("Login successful!");
            return result;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            toast.success("Logout successful!");
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            // //console.log('current user', currentUser);
            setLoading(false);

            //if user exist then issue a token
            if(currentUser){

                axios.post( 'https://car-doctor-sever-main.vercel.app/jwt' ,loggedUser, {withCredentials: true})
                .then(() => {
                    //console.log('token response from auth provider: ',res.data);
                })
            }
            else{
                axios.post('https://car-doctor-sever-main.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(() =>{
                    //console.log(res.data);
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [user])
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return () => unsubscribe();
    // }, []);

    const authInfo = {
        user,
        loading,
        createUser, 
        signIn,
        signInWithGoogle,
        logOut,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
