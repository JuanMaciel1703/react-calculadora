import React, { Component } from 'react'
import './Calculator.css'

import ButtonsPad from '../components/ButtonsPad'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
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
        console.log('Seted operation: ' + operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = n !== '.' && this.state.displayValue === '0' || this.state.clearDisplay
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
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <ButtonsPad 
                    addDigit={this.addDigit}
                    clearMemory={this.clearMemory} 
                    setOperation={this.setOperation}
                />
            </div>
        )
    }
}