import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Router from './Router';
import { FirebaseContext } from '../firebase';
import AuthUserContext from '../context/AuthUserContext';

const App = () => {
    const [authUser, setAuthUser] = React.useState(null);
    const firebase = React.useContext(FirebaseContext);
    const listenForAuth = () => {
        firebase.auth.onAuthStateChanged((authUser) =>
            setAuthUser(authUser ? authUser : null)
        );
    }
    React.useEffect(() => {
        listenForAuth()
        return () => listenForAuth()
    }, [setAuthUser]);
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
