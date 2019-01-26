import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Form, Input } from '../components/common/form'

const SignUpPage = (props) => {
    return (
        <div>
            <h2>Sign Up</h2>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Must be a valid email')
                        .required('Required'),
                    password: Yup.string().required('Required')
                })}
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

export default SignUpPage;
