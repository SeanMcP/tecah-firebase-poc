import React from 'react';
import { withRouter } from 'react-router-dom';

import PasswordChangeForm from '../components/PasswordChangeForm';
import useAuthorization, { isUser } from '../hooks/useAuthorization';
import AuthUserContext from '../context/AuthUserContext';

const AccountPage = (props) => {
    useAuthorization(isUser, props.history);
    const authUser = React.useContext(AuthUserContext);
    if (!authUser) return null;
    return (
        <div>
            <h2>My Account</h2>
            <p>Email: {authUser.email}</p>
            <PasswordChangeForm />
        </div>
    );
};

export default withRouter(AccountPage);
