import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background: none;
    border-radius: 5px;
    /* height: 2rem; */
    margin-bottom: 15px;  
`; 

export default function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase 
                onChange={onChange} 
                placeholder={placeholder}
                {...props}
            />      
        </div>
    );   
}

Input.defaultProps = {
    value: '',
};

Input.PropTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
};