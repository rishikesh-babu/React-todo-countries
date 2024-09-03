import React, { forwardRef } from "react";
import './Input.css'

// function Input({ type, placeholder, handleInput, todoinput }) {
//     return(
//         <input onChange={handleInput} value={todoinput} type={type ?? 'text'} placeholder={placeholder ?? 'Enter the data'} />
//     )
// }
const Input = forwardRef(({ type, placeholder, handleInput, todoinput }, ref) => {
    return (
        <input ref={ref} value={todoinput} onChange={handleInput} type={type ?? 'text'} placeholder={placeholder ?? 'Enter the data'} className="input" />
    )
})
export default Input