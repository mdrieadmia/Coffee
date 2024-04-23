import {createContext, useState } from "react";
import PropTypes from 'prop-types';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from "../firebase/firebase.config";


 
const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)


    const createUser = (email, passwrod) =>{
        return createUserWithEmailAndPassword(auth, email, passwrod)
    }


    const userInfo = {
        user,
        setUser,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};


export default AuthProvider;