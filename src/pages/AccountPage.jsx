import React from 'react';
import { withRouter } from 'react-router-dom';
import PasswordChangeForm from '../components/PasswordChangeForm';
import useAuthorization, { isUser } from '../hooks/useAuthorization';

const AccountPage = (props) => {
    useAuthorization(isUser, props.history);
    return (
        <div>
            <h2>My Account</h2>
            <PasswordChangeForm />
        </div>
    );
};

export default withRouter(AccountPage);
