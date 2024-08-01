// imports
const { Circle, Triangle, Square} = require ("./shape");

// testing for triangle 
describe("Triangle test", () => {
    test("test for a triangle with blue background", () => {
        const shape =  new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<polygon points= "150, 18 244, 182 56, 182" fill="blue" />`
        );
    });
});

// testing for square
describe("Square test", () => {
    test("test for a square with purple background", () =>{
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
         `<rect x="73" y="40" width="160" height="160" fill="purple" />`
        );
    });
});

// testing for a circle
describe("Circle test", () => {
    test("test for a  circle" ,() => {
        const shape = new Circle();
        shape.setColor("#ca00ca");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="#ca00ca" />`
        );
    });
});

