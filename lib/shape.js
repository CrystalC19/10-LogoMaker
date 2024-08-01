// Shape class utilizes constructor to define a shape

class Shape{
    constructor(){
        this.color = "";
    }
    // shape class takes in setcolor function
    setColor(colorVar){
        this.color= colorVar;
    }
}
// circle inherits properties in shape class
class Circle extends Shape{
    render(){
        // returns polygon with color input
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// inherits properties in shape class
class Triangle extends Shape{
    render() {
        return `<polygon points="150, 18 244, 182 56,182" fill="${this.color}" />`;
    }
}


 // inherits properties defined in shape class
class Square extends Shape{
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}


// Exports classes
module.exports = { Triangle, Square, Circle };