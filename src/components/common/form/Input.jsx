import React from 'react';
import PropTypes from 'prop-types';

import { BareInput, Error, Label, Help } from './index';

const Input = ({ error, help, hideLabel, id, label, ...props }) => {
    const bareInputProps = {
        ...props,
        'aria-describedby': help ? `${id}-help` : null,
        'aria-label': hideLabel ? label : null,
        hasError: error ? true : false
    };
    return (
        <React.Fragment>
            {!hideLabel && (
                <Label htmlFor={id} id={`${id}-label`}>
                    {label}
                </Label>
            )}
            {help && <Help id={`${id}-help`}>{help}</Help>}
            <BareInput id={id} {...bareInputProps} />
            {error && <Error>{error}</Error>}
        </React.Fragment>
    );
};

Input.propTypes = {
    hideLabel: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Input;
