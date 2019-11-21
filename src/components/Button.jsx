import React from 'react'
import './Button.css'

export default props => {
    console.log(props)
    let classes = `button ${props.styleClasses ? props.styleClasses : ''}`

    return (
        <button 
            className={classes}
            onClick={() => {
                console.log('Button pressed: ' + props.value)
                console.info('Function: ', props.function)
                props.function(props.value)
            }}
        >
            {props.label}
        </button>
    )
}