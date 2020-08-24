import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, ...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={id}>{label}</label>
            <textarea name="" id={id} {...rest} />
        </div>
    );

}

export default Textarea;