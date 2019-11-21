import React, { Component } from 'react'
import './Calculator.css'

import ButtonsPad from '../components/ButtonsPad'
import Display from '../components/Display'
import ColorsMenu from '../components/ColorsMenu'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0,
    error: null
}
export default class Calculator extends Component {
    state = { ...initialState }
    
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            var error = null

            try {
                values[0] = this.calculate(currentOperation, values[0], values[1])
            } catch(err) {
                values[0] = this.state.values[0]
                error = err.message
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
                error
            })
        }
    }

    calculate(operation, a, b) {
        var result = '0'

        switch(operation) {
            case '+':
                result = a + b
                break
            case '-':
                result = a - b
                break
            case '*':
                result = a * b
                break
            case '/':
                if (b === 0) 
                    throw new Error("Division by Zero isn't allowed in this World (not yet).")
                result = a / b
                break
            default: 
                result = '0'
        }
        return result
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = (n !== '.' && this.state.displayValue === '0') || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.info(values)
        }
    }


    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <ButtonsPad 
                    addDigit={this.addDigit}
                    clearMemory={this.clearMemory} 
                    setOperation={this.setOperation}
                />
                <ColorsMenu />
            </div>
        )
    }
}