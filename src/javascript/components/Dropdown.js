import React, { useState, useEffect } from 'react';

// Simple dropdown menu which returns the selected value
function Dropdown(props) {

    const [ value, setValue ] = useState(props.options[0].value);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const options = props.options.map((option, index) => 
        <option key={index} value={option.value}>{option.label}</option>
    );

    useEffect(() => {
        props.setReturnValue(value);
    }, [props, value]);

    return (
        <div value={value}>
            <select onChange={handleChange}>
                {options}
            </select>
        </div>
    )
}

export default Dropdown;