import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Form, Help, Input, Label } from '../components/common/form'

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
                        <Label htmlFor="email">Email address</Label>
                        <Help id="email-help">E.g. sean@m.cp</Help>
                        <Input
                            aria-describedby="email-help"
                            id="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            error={errors.email}
                        />
                        {errors.email && (
                            <label htmlFor="email">{errors.email}</label>
                        )}
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            error={errors.password}
                        />
                        {errors.password && (
                            <label htmlFor="password">{errors.password}</label>
                        )}
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
