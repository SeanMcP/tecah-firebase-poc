import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';

import { Form, Input } from '../components/common/form';

const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: ''
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Required'),
    password: Yup.string().required('Required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password', null)], 'Passwords must match')
        .required('Passwords must match')
});

const SignUpPage = (props) => {
    const firebase = React.useContext(FirebaseContext);
    const handleSubmit = (values) => {
        const { email, password } = values;
        firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(() => {
                props.history.push(ROUTES.HOME);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <h2>Sign Up</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({
                    dirty,
                    errors,
                    handleBlur,
                    handleChange,
                    handleReset,
                    handleSubmit,
                    isSubmitting,
                    values
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            label="Email address"
                            help="E.g. sean@m.cp"
                            id="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            error={errors.email}
                        />
                        <Input
                            label="Password"
                            id="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            error={errors.password}
                        />
                        <Input
                            label="Confirm password"
                            id="passwordConfirmation"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.passwordConfirmation}
                            error={errors.passwordConfirmation}
                        />
                        <button
                            disabled={!dirty || isSubmitting}
                            type="reset"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <p>
                Already have an account?{' '}
                <Link to={ROUTES.SIGN_IN}>Sign in</Link>!
            </p>
        </div>
    );
};

export default withRouter(SignUpPage);
