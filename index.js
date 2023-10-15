/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/13/2023 7:58:02 PM 
 */

// Include packages needed for this application
const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const questions = require('./assets/js/colors.js');

let builder = {
    acronym: "",
    textcolor: "",
    shape: "",
    shapecolor: "",
    filename: "./examples/logo.svg"
}

let shapes = {
    "circle": { code: `<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"${builder.shapecolor}\" /><text x=\"150\" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"${builder.textcolor}\">${builder.acronym}</text></svg>` },
    "square": { code: `<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"510\" height=\"530\" stroke=\"${builder.shapecolor}\" fill=\"green\" stroke-width=\"2\"/><text x=\"150\" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"${builder.textcolor}\">${builder.acronym}</text></svg>` },
    "triangle": { code: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-triangle\"><polygon x=\"10\" y=\"10\"  stroke=\"black\" stroke-width=\"2\" fill=\"${builder.shapecolor}\" points=\"250,60 100,400 400,400\"/><text x=\"250\" y=\"300\" font-size=\"60\" text-anchor=\"middle\" fill=\"${builder.textcolor}\">${builder.acronym}</text></svg>` }
}

/**
 * Start the Readme questionnaire process; the goal is to achieve sections for Description, Table of Contents,
 * Installation, Usage, License, Contributing, and Tests. This is the start of a chain of events build on promises, 
 * each section will feed a global array of ojects that will be used to creae the Readme document. 
 * We start with the product name.
 */
const init = () => {

    // Validate whether file exists or not
    if (fs.existsSync(builder.filename)) {

        fs.unlink(builder.filename, (err) => {
            if (err) {
                console.error(`Error deleting file: ${err}`);
                return false;
            }
        });
    }

    /**
     * In this asssignment we use nested inquirer questions - last assignemt each one would be on their 
     * own function. In here we start with the logoquestions and if everything comes back ok, the a new
     * prompt is triggered - shapequestions
     */
    inquirer.prompt(questions.logoquestions)
        .then(answers => {

            builder.acronym = answers.acronym;
            builder.textcolor = answers.colorname;

            inquirer.prompt(questions.shapequestions)
                .then((answer) => {

                    builder.shape = answer.shape; // Store shape
                    builder.shapecolor = answer.shapecolor; // Store shape color

                    createShape();
                });

        })
        .catch((e) => console.log(e.message));
};

/**
 * This option will create the SVG file.
 * @returns 
 */
function createShape() {

    let buildfilesrting = shapes[builder.shape];

    fs.writeFile(builder.filename, buildfilesrting, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

    return true;
}

/**
 * Entry point for the application. File will trigger this when it finishes
 * loading
 */
init();