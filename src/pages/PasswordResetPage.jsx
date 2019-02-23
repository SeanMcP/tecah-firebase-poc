import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';

import { Form, Input } from '../components/common/form';

const initialValues = { email: '' };
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Required')
});

const PasswordResetPage = (props) => {
    const firebase = React.useContext(FirebaseContext);
    const handleSubmit = (values) => {
        const { email } = values;
        firebase
            .doPasswordReset(email)
            .then(() => {
                props.history.push(ROUTES.SIGN_IN);
                console.log('success');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <h2>Password reset</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    values
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            label="Email address"
                            help="The email address associated with your account"
                            id="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            error={errors.email}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Reset password
                        </button>
                    </Form>
                )}
            </Formik>
            <p>
                Suddenly remember your password?{' '}
                <Link to={ROUTES.SIGN_IN}>Sign in</Link>!
            </p>
        </div>
    );
};

export default withRouter(PasswordResetPage);
