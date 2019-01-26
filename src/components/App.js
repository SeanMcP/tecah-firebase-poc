import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Router from './Router'

const App = (props) => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Router />
            </React.Fragment>
        </BrowserRouter>
    );
};

export default App;
