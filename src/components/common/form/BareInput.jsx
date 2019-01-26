import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SInput = styled.input`
    border: 1px solid gray;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem;

    ${(props) =>
        props.hasError &&
        css`
            border-color: firebrick;
        `}
`;

const Input = (props) => {
    return <SInput {...props} />;
};

Input.propTypes = {
    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Input;
