import React, { Component } from 'react'
import './ColorsMenu.css'

const initialState = {
    digitBackgroundColor: '',
    documentElementStyle: document.documentElement.style
}

export default class ColorsMenu extends Component {
    state = { ...initialState }

    handleColorChange(e, property) {
        const color = e.target.value
        const test = document.getElementById('root')
        this.state.documentElementStyle.setProperty(property, color)
    }

    render() {
        return(
            <div className="colorsMenu">
                <h2>Colors Menu</h2>
                <ul>
                    <li>
                        Background Gradient
                        <br/>
                        From: <input type="text" onBlur={(e) => this.handleColorChange(e, '--bg-gradient-from-color')}></input>
                        <br/>
                        To: <input type="text" onBlur={(e) => this.handleColorChange(e, '--bg-gradient-to-color')}></input>
                    </li>
                    <li>
                        Calculator Background
                        <br/>
                        <input type="text" onBlur={(e) => this.handleColorChange(e, '--calculator-bg-color')}></input>
                    </li>
                    <li>
                        Digit Buttons Background
                        <br/>
                        <input type="text" onBlur={(e) => this.handleColorChange(e, '--digit-button-bg-color')}></input>
                    </li>
                    <li>
                        Digit Buttons Font
                        <br/>
                        <input type="text" onBlur={(e) => this.handleColorChange(e, '--digit-button-font-color')}></input>
                    </li>
                    <li>
                        Operation Buttons Background
                        <br/>
                        <input type="text" onBlur={(e) => this.handleColorChange(e, '--operation-button-bg-color')}></input>
                    </li>
                    <li>
                        Operation Buttons Font
                        <br/>
                        <input type="text" onBlur={(e) => this.handleColorChange(e, '--operation-button-font-color')}></input>
                    </li>
                </ul>
            </div>
        )
    }
}