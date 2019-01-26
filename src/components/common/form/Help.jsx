import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SDiv = styled.div`
    font-style: italic;
`;

const Help = (props) => <SDiv {...props} />;

Help.propTypes = {
    id: PropTypes.string.isRequired
};

export default Help;
