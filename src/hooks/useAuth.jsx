import React from 'react';
import { FirebaseContext } from '../firebase';

const useAuth = () => {
    const [authUser, setAuthUser] = React.useState(null);
    const firebase = React.useContext(FirebaseContext);
    const listenForAuth = () => {
        firebase.auth.onAuthStateChanged((authUser) =>
            setAuthUser(authUser ? authUser : null)
        );
    };
    React.useEffect(() => {
        listenForAuth();
        return () => listenForAuth();
    }, [setAuthUser]);
    return { authUser };
};

export default useAuth;
