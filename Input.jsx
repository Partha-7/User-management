import React from 'react';
const Input = ({ name, errors, label, value, onChange, type, placeholder }) => {
    return ( 
        <div className="form-group custom_input_group">
        <label htmlFor={name} className="label_name">{label}</label>
        <input 
            type={type}
            name={name} 
            value={value}
            onChange={onChange}
            className="form-control"
            placeholder={placeholder}
            errors={errors}
        />
        {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
     );
}
 
export default Input;