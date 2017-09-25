import React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error, type="text" }) => {
    let wrapperClass = 'col-xs-10 col-sm-6 col-md-6';
    if (error && error.lenght > 0) {
        wrapperClass += ' has-error'
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}

export default TextInput;