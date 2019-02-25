import React from 'react';
import { withRouter } from 'react-router-dom';

import useAuthorization, { isAdmin } from '../hooks/useAuthorization';

const AdminPage = (props) => {
    useAuthorization(isAdmin, props.history);
    return (
        <div>
            <h2>Admin</h2>
        </div>
    );
};

export default withRouter(AdminPage);
