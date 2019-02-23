import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Router from './Router';
import AuthUserContext from '../context/AuthUserContext';
import useAuth from '../hooks/useAuth';

const App = () => {
    const { authUser } = useAuth();
    return (
        <AuthUserContext.Provider value={authUser}>
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Router />
                </React.Fragment>
            </BrowserRouter>
        </AuthUserContext.Provider>
    );
};

export default App;
