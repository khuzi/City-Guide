import React from 'react'


const Input = (props) => {
    let inputElement = null;
    switch (props.element) {
        case 'input':
            inputElement = <input className={props.classes} {...props}/>    
            break;
        case 'textarea':
            inputElement = <textarea  className={props.classes} {...props}/>    
            break;
        default:
            inputElement = <input className={props.classes} {...props}/>
            break;
    }
    return (
        <div>
            {inputElement}
        </div>
    );
};

export default Input;
