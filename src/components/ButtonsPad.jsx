import React, { Component } from 'react'
import Button from './Button'
import getButtons  from '../models/Buttons'
import ButtonFactory from '../factory/ButtonFactory'
import './ButtonsPad.css'

export default class ButtonsPad extends Component {
    resolveButtonFunction(button) {
        if (button.isDigit) {
            return this.props.addDigit
        }

        if (button.isOperation) {
            return this.props.setOperation
        }

        if (button.clearMemory) {
            return this.props.clearMemory
        }
    }

    render(props) {
        return (
            <div className="buttonsPad">
                {
                    getButtons().map(button => {
                        const buttonInstance = ButtonFactory.build(button)
                        const buttonFunction = this.resolveButtonFunction(buttonInstance)

                        return (
                            <Button 
                                key={buttonInstance.id} 
                                label={buttonInstance.label} 
                                styleClasses={buttonInstance.styleClasses}
                                value={buttonInstance.value}
                                function={buttonFunction}
                            />
                        )
                    })
                }
            </div>
        )
    }
}