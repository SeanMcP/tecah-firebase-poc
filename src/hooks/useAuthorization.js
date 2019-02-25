import React from 'react';

import { FirebaseContext } from '../firebase';
import ROLES from '../constants/roles';
import ROUTES from '../constants/routes';

const useAuthorization = (condition = () => true, history) => {
    const firebase = React.useContext(FirebaseContext);
    const listenForAuthUser = firebase.auth.onAuthStateChanged((authUser) => {
        if (!condition(authUser)) {
            // I don't love this but can't see a good way around it
            // for the time being.
            history.push(ROUTES.SIGN_IN);
        }
    });
    React.useEffect(() => {
        listenForAuthUser();
        return listenForAuthUser;
    }, []);
};

export default useAuthorization;

export const isAdmin = (authUser) =>
    authUser && authUser.roles && authUser.roles.includes(ROLES.ADMIN);
export const isUser = (authUser) => !!authUser;
