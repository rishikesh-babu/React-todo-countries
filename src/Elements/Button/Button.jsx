import React from "react";

function Button({ value }) {
    return(
        <button>
            {value ?? 'Click'} 
        </button>
    )
}

export default Button