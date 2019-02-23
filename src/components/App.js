import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Router from './Router';
import AuthUserContext from '../context/AuthUserContext';
import useAuthUser from '../hooks/useAuthUser';

const App = () => {
    const { authUser } = useAuthUser();
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
