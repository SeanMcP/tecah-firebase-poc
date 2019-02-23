import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';

import { Form, Input } from '../components/common/form';

const initialValues = {
    password: '',
    passwordConfirmation: ''
};

const validationSchema = Yup.object().shape({
    password: Yup.string().required('Required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password', null)], 'Passwords must match')
        .required('Passwords must match')
});

const PasswordChangeForm = (props) => {
    const firebase = React.useContext(FirebaseContext);
    const handleSubmit = (values) => {
        const { password } = values;
        firebase
            .doPasswordUpdate(password)
            .then(() => {
                props.history.push(ROUTES.ACCOUNT);
                console.log('success');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <h2>Change password</h2>
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
                            label="New password"
                            id="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            error={errors.password}
                        />
                        <Input
                            label="Confirm new password"
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
        </div>
    );
};

export default withRouter(PasswordChangeForm);
