const buttons = [
    { id: 0,  name: 'Clear', value: 'AC', label: 'AC', styleClasses: 'tripple', isDigit: false, clearMemory: true }, 
    { id: 1,  name: 'Divide', value: '/', label: '/', styleClasses: 'operation', isDigit: false, isOperation: true },
    { id: 2,  name: 'Seven', value: '7', label: '7', isDigit: true, isOperation: false }, 
    { id: 3,  name: 'Eight', value: '8', label: '8', isDigit: true, isOperation: false }, 
    { id: 4,  name: 'Nine', value: '9', label: '9', isDigit: true, isOperation: false }, 
    { id: 5,  name: 'Sum', value: '+', label: '+', styleClasses: 'operation' , isDigit: false, isOperation: true },
    { id: 6,  name: 'Four', value: '4', label: '4', isDigit: true, isOperation: false }, 
    { id: 7,  name: 'Five', value: '5', label: '5', isDigit: true, isOperation: false }, 
    { id: 8,  name: 'Six', value: '6', label: '6', isDigit: true, isOperation: false }, 
    { id: 9,  name: 'Sub', value: '-', label: '-', styleClasses: 'operation' , isDigit: false, isOperation: true }, 
    { id: 10, name: 'One', value: '1', label: '1', isDigit: true, isOperation: false }, 
    { id: 11, name: 'Two', value: '2', label: '2', isDigit: true, isOperation: false }, 
    { id: 12, name: 'Three', value: '3', label: '3', isDigit: true, isOperation: false }, 
    { id: 13, name: 'Multiply', value: '*', label: '*', styleClasses: 'operation' , isDigit: false, isOperation: true },
    { id: 14, name: 'Zero', value: '0', label: '0', isDigit: true, styleClasses: 'double', isOperation: false }, 
    { id: 15, name: 'Point', value: '.', label: '.', isDigit: true, isOperation: false }, 
    { id: 16, name: 'Equals', value: '=', label: '=', styleClasses: 'operation', isDigit: false, isOperation: true }
]

export default function getButtons() {
    return buttons
}