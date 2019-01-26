import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SForm = styled.form`
    display: grid;
    grid-gap: 0.5rem;
`

const Form = ({ children, ...props }) => {
    return <SForm {...props}>{children}</SForm>;
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Form;
