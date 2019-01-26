import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../constants/routes';

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
                <ul>{links}</ul>
            </nav>
        </header>
    );
};

export default Header;
