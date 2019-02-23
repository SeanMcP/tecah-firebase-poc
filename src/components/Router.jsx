import React from 'react';
import { Route } from 'react-router-dom';

import ROUTES from '../constants/routes';

import AccountPage from '../pages/AccountPage';
import AdminPage from '../pages/AdminPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import PasswordResetPage from '../pages/PasswordResetPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

const Router = (props) => {
    return (
        <React.Fragment>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route
                path={ROUTES.PASSWORD_RESET}
                component={PasswordResetPage}
            />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </React.Fragment>
    );
};

export default Router;
