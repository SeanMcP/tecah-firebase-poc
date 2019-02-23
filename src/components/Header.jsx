import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../constants/routes';

import SignOutButton from './common/SignOutButton'

const Header = (props) => {
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
                    <li><SignOutButton /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
