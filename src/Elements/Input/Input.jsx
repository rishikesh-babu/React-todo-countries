import React from "react";
import './Input.css'

function Input({ type, placeholder, handleInput, todoinput }) {
    return(
        <input onChange={handleInput} value={todoinput} type={type ?? 'text'} placeholder={placeholder ?? 'Enter the data'} />
    )
}

export default Input