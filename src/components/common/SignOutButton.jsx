import React from 'react';
import { FirebaseContext } from '../../firebase';

const SignOutButton = ({ text = 'Sign out', ...props }) => {
    const { doSignOut } = React.useContext(FirebaseContext);
    return (
        <button {...props} onClick={doSignOut}>
            {text}
        </button>
    );
};

export default SignOutButton;
