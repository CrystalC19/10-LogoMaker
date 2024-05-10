const inquirer = require (`inquirer`);
const fs = require(`fs`);
import { Circle , Triangle , Square} from (`./lib/shape`)




async function generateLogo(){
    const data = await inquirer.prompt([
    {
        type: `input`,
        message: `Input 3 characters`,
        name: `text for logo`,
    },{
        type: `input`,
        message: `Pick a color for the text`,
        name: ` text-color`,

    },{
        type: `list`,
        message: `Select a shape.`,
        name:`shape`,
        choices: [`circle`, `triangle`,`square`],



    },
    {
        type: `input`,
        message:`pick a color for the shape`,
        name:`shapecolor`,

    },
])}

let shape
switch (data.shape) =>{
    

});


const svgContent = `<svg  svg>`
${shape.render()}




export{generateLogo}