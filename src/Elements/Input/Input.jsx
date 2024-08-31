import React from "react";

function Input({ type, placeholder }) {
    return(
        <input type={type ?? 'text'} placeholder={placeholder ?? 'Enter the data'} />
    )
}

export default Input