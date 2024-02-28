import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({placeholder, value, onChange, id}) => {
    return (
        <input
            text="type"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={classes.myInput}
        />
    );
};

export default MyInput;