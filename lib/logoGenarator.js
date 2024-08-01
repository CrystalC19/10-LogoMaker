import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './shape.js';

async function generateLogo() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3 && input.length > 0
        },
        {
            type: 'input',
            name: ' textColor',
            message: ' Enter the text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color:'
        }
    ]);

    let shape;
    switch (answers.shape){
        case 'circle':
            shape = new Circle (answers.shapeColor);
            break;
        case 'triangle': 
            shape = new Triangle (answers.shapeColor);
            break;
        case 'square':

        shape = new Square (answers.shapecolor);
        break;
    }
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
    ${shape.render()}
    <text x="150" y"130" font-size"40"  text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
    `;

    fs.writeFileSync('examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
}

export { generateLogo };