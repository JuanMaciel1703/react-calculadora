import React, { Component } from 'react'
import './Calculator.css'

import ButtonsPad from '../components/ButtonsPad'
import Display from '../components/Display'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log('Clear')
    }

    setOperation(operation) {
        console.log('Seted operation: ' + operation)
    }

    addDigit(n) {
        console.log('Added digit: ' + n)
    }


    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value="12345"/>
                <ButtonsPad 
                    addDigit={this.addDigit}
                    clearMemory={this.clearMemory} 
                    setOperation={this.setOperation}
                />
            </div>
        )
    }
}