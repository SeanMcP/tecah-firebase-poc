import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SLabel = styled.label`
    font-weight: bold;
`;

const Label = (props) => {
    return (
        <SLabel {...props} />
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired
};

export default Label;
