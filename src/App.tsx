import React from 'react';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import GlobalStyle from '../src/styles/global';

import ToastContainer from '../src/components/ToastContainer'
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <SignIn />
        </AuthProvider>
        
        <ToastContainer/>
        <GlobalStyle />
    </>
);
export default App;
