import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ id, label, options, ...rest}) => {
    return(
        <div className="select-block">
            <label htmlFor={id}>{label}</label>
            <select value="" name="" id={id} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                { options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                }) } 
            </select>
        </div>
    );

}

export default Select;