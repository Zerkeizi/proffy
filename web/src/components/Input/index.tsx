import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Input: React.FC<InputProps> = ({ id, label, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={id}>{label}</label>
            <input type="text" name="" id={id} {...rest} />
        </div>
    );

}

export default Input;