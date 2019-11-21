function ButtonFactory(attrs) {
    for (var attrName in attrs) {
        this[attrName] = attrs[attrName]
    }
}

ButtonFactory.build = function(attrs) {
    return new ButtonFactory(attrs)
}

export default ButtonFactory