import React from 'react'
import './Button.css'

export default props => {
    let classes = `button ${props.styleClasses ? props.styleClasses : ''}`
    console.log(classes)

    return (
        <button 
            className={classes}
            onClick={() => {
                props.function(props.value)
            }}
        >
            {props.label}
        </button>
    )
}