import React, { createContext, useCallback } from 'react';
import api from '../../src/services/api';

interface signInCredentials {
    email: string;
    password: string;
}


interface AuthContextData {
    name: string;
    signIn(credentials: signInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        console.log(response.data);
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'Diego', signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
