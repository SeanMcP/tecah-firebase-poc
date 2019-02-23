import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../constants/routes';

import SignOutButton from './common/SignOutButton'
import AuthUserContext from '../context/AuthUserContext';

const Header = (props) => {
    const authUser = React.useContext(AuthUserContext);
    const links = [];
    for (const page in ROUTES) {
        links.push(
            <li key={page}>
                <Link to={ROUTES[page]}>{page}</Link>
            </li>
        );
    }
    return (
        <header>
            <h1>TECAH</h1>
            <nav>
                <ul>
                    {links}
                    {authUser && <li><SignOutButton /></li>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
